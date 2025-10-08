// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendPurchaseEmail } from '@/lib/sendEmail';
import { getProductById } from '@/lib/products'; // For fetching filePath
import { generateSignedUrl } from '@/lib/googleStorage'; // GCS signed URL
import { Redis } from '@upstash/redis'; // Redis import

// Stripe secret from dashboard—put in .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

// Webhook secret from Stripe dashboard
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(request: Request) {
  const body = await request.text(); // Raw payload
  const sig = request.headers.get('stripe-signature') as string;

  if (!endpointSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set!');
    return NextResponse.json({ error: 'Webhook secret missing' }, { status: 500 });
  }

  let event: Stripe.Event | undefined;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error('Webhook signature error:', err.message);
    return NextResponse.json(
      { error: 'Webhook signature failed', details: err.message },
      { status: 400 }
    );
  }

  if (!event) {
    console.error('No event parsed from webhook');
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }

  // Only act on successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const productId = session.metadata?.productId || 'unknown';
    const customerType = session.metadata?.customerType || 'solo';
    const maxDownloads = customerType === 'solo' ? 3 : customerType === 'team' ? 5 : Infinity;
    const windowDays = 7; // Time window for retries/devices

    const product = getProductById(productId);
    const productName = product?.title || session.metadata?.productName || 'Your Product';

    // Generate signed URL with hybrid time + count tracking
    let signedUrl: string | undefined;
    if (product && email) {
      try {
        const key = `downloads:${email}:${productId}`; // Per buyer/product
        const downloads = (await redis.get<number>(key)) || 0;
        const expiry = (await redis.get<number>(`${key}:expiry`)) || Date.now() + (windowDays * 24 * 60 * 60 * 1000);
        
        if (Date.now() > expiry) {
          console.log(`Window expired for ${key}`);
        } else if (downloads < maxDownloads) {
          signedUrl = await generateSignedUrl(product.filePath);
          await redis.incr(key);
          console.log(`Download ${downloads + 1}/${maxDownloads} for ${key} (expires ${new Date(expiry)})`);
        } else {
          console.log(`Max downloads reached for ${key}`);
        }
      } catch (urlError: any) {
        console.error(
          '*** FAILED: Signed URL error for',
          product.filePath,
          ':',
          urlError.message,
          '***'
        );
      }
    }

    // Send email (non-blocking)
    try {
      if (email) {
        await sendPurchaseEmail(email, productName, signedUrl);
      }
    } catch (emailError) {
      console.error('Email failed:', emailError);
    }

    console.log(
      'Payment complete for:',
      email,
      'Product:',
      productId,
      'URL generated:',
      !!signedUrl
    );

    return NextResponse.json({ ok: true });
  }

  // If event type not relevant, just respond OK
  return NextResponse.json({ ok: true });
}