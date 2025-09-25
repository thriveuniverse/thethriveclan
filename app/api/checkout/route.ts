// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/products"; // Import helper for array

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil", // Or your version
});

export async function POST(request: Request) {
  const { packageId, userEmail, customerType } = await request.json();

  // Get product using helper (works with array)
  const product = getProductById(packageId);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Get option amount
  const option = product.options[customerType];
  if (!option) {
    return NextResponse.json({ error: "Invalid customer type" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${product.title} - ${option.name}`,
              metadata: {
                productId: product.id,
                productName: product.title,
              },
            },
            unit_amount: option.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: userEmail,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      metadata: {
        productId: product.id,
        productName: product.title,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}