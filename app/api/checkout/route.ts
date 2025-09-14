// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "../../lib/products";

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil" as const, // Match the type, test runtime
});

export async function POST(request: Request) {
  const { packageId, userEmail, customerType } = await request.json();
  const product = products[packageId as keyof typeof products];
  if (!product) {
    return NextResponse.json({ error: "Invalid package ID" }, { status: 400 });
  }
  const optionKeys = Object.keys(product.options) as (keyof typeof product.options)[];
  const priceData = product.options[customerType as keyof typeof product.options] || product.options[optionKeys[0]];

  if (!priceData) {
    return NextResponse.json({ error: "Invalid customer type" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: priceData.name,
          },
          unit_amount: priceData.amount,
        },
        quantity: 1,
    },
  ],
    mode: "payment",
    success_url: `${request.headers.get("origin") || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${request.headers.get("origin") || "http://localhost:3000"}/cancel`,
    customer_email: userEmail,
  });

  return NextResponse.json({ id: session.id });
}