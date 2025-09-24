// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendPurchaseEmail } from '@/lib/sendEmail'; // Adjust path if lib/ is elsewhere (e.g., '../../../lib/sendEmail')

// SECRET from Stripe dashboard—put in your .env!
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

// Your webhook secret from Stripe dashboard (not your API key!)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: Request) {
  const body = await request.text(); // Webhook payload is raw text
  const sig = request.headers.get('stripe-signature') as string;

  // Guard: Log if secret is missing (check Netlify functions logs)
  if (!endpointSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set!');
    return NextResponse.json({ error: 'Webhook secret missing' }, { status: 500 });
  }

  let event: Stripe.Event | undefined;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    // Signature failed, possible spoof or misconfiguration
    console.error('Webhook signature error:', err.message);
    return NextResponse.json({ error: 'Webhook signature failed', details: err.message }, { status: 400 });
  }

  // Guard: If no event after try (shouldn't happen, but TS safety)
  if (!event) {
    console.error('No event parsed from webhook');
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }

  // Only act on successful payments!
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const productId = session.metadata?.productId || 'unknown';
    const productName = session.metadata?.productName || 'Your Product'; // We'll enhance in Step 5

    // TODO: Generate signed URL here (e.g., const signedUrl = await getSignedUrl(productId);)
    const signedUrl = undefined; // Placeholder until Google Cloud ready

    // Send email
    try {
      if (email) { // Extra safety: Only send if email exists
        await sendPurchaseEmail(email, productName, signedUrl);
      }
    } catch (emailError) {
      console.error('Email failed:', emailError);
      // Don't fail the webhook—Stripe expects 200 OK anyway
    }

    console.log('Payment complete for:', email, 'Product:', productId);

    // Must respond fast—don’t do slow work here, or use queues for email, etc.
    return NextResponse.json({ ok: true });
  }

  // If not the right event, ignore but respond
  return NextResponse.json({ ok: true });
}