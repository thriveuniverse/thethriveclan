// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// SECRET from Stripe dashboard—put in your .env!
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

// Your webhook secret from Stripe dashboard (not your API key!)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text(); // Webhook payload is raw text
  const sig = request.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    // Signature failed, possible spoof or misconfiguration
    return NextResponse.json({ error: 'Webhook signature failed', details: err.message }, { status: 400 });
  }

  // Only act on successful payments!
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const productId = session.metadata?.productId || 'unknown';

    // TODO: generate Google Cloud signed URL for digital delivery

    // TODO: send email to `email` with link

    // For logging/debug
    console.log('Payment complete for:', email, 'Product:', productId);

    // Must respond fast—don’t do slow work here, or use queues for email, etc.
    return NextResponse.json({ ok: true });
  }

  // If not the right event, ignore but respond
  return NextResponse.json({ ok: true });
}
