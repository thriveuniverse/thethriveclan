// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/products"; // Assumes array in products.ts

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil", // Match webhook version
});

export async function POST(request: Request) {
  try {
    const { packageId, userEmail, customerType } = await request.json();

    console.log("Checkout request:", { packageId, userEmail, customerType }); // Debug

    // Get product using helper (works with array)
    const product = getProductById(packageId);
    if (!product) {
      console.error("Product not found:", packageId);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Get option amount
    const option = product.options[customerType];
    if (!option) {
      console.error("Invalid customer type:", customerType, "for product:", packageId);
      return NextResponse.json({ error: "Invalid customer type" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${product.title} - ${option.name}`,
              description: product.description,
            },
            unit_amount: option.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: userEmail,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://thethriveclan.com"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://thethriveclan.com"}/cancel`,
      metadata: {
        productId: product.id,
        productName: product.title,
        customerType: customerType, // Optional: For webhook logging
      },
    });

    console.log("Session created:", session.id);
    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}