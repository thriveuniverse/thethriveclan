// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "../../lib/products";

// Define the shape of product options
interface Option {
  name: string;
  amount: number;
}

// Assume ProductId and option keys are based on your data
type ProductId = keyof typeof products;
type OptionKey = keyof typeof products[ProductId]["options"];

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil" as const,
});

export async function POST(request: Request) {
  const { packageId, userEmail, customerType } = await request.json() as {
    packageId: ProductId;
    userEmail: string;
    customerType: OptionKey;
  };

  // Type guard for product existence
  const product = products[packageId];
  if (!product) {
    return NextResponse.json({ error: "Invalid package ID" }, { status: 400 });
  }

  // Validate customerType against available options
  const optionKeys = Object.keys(product.options) as OptionKey[];
  if (!optionKeys.includes(customerType)) {
    return NextResponse.json({ error: "Invalid customer type" }, { status: 400 });
  }

  const priceData = product.options[customerType];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur", // Matches your euro pricing
          product_data: {
            name: product.title,
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