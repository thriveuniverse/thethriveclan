// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "../lib/products.ts"; // Revert to named import

interface Product {
  id: string;
  slug: string;
  sector: string;
  title: string;
  description: string;
  img: string;
  options: {
    [key: string]: { name: string; amount: number };
  };
}

const typedProducts: { [key: string]: Product } = products || {}; // Fallback to empty object if import fails

type ProductId = keyof typeof typedProducts;
type OptionKey = keyof Product["options"];

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil" as const,
});

export async function POST(request: Request) {
  const { packageId, userEmail, customerType } = await request.json() as {
    packageId: ProductId;
    userEmail: string;
    customerType: OptionKey;
  };

  console.log("Received data:", { packageId, userEmail, customerType });
  console.log("Available products:", typedProducts);

  const product = typedProducts[packageId];
  if (!product) {
    return NextResponse.json({ error: "Invalid package ID" }, { status: 400 });
  }

  const optionKeys = Object.keys(product.options) as OptionKey[];
  console.log("Available option keys:", optionKeys);
  if (!optionKeys.includes(customerType)) {
    return NextResponse.json({ error: `Invalid customer type. Options are: ${optionKeys.join(", ")}` }, { status: 400 });
  }

  const priceData = product.options[customerType];
  console.log("Selected price data:", priceData);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.title,
          },
          unit_amount: priceData.amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
success_url: `${request.headers.get("origin") || "http://localhost:3000"}/success?session_id=\{CHECKOUT_SESSION_ID\}`,
cancel_url: `${request.headers.get("origin") || "http://localhost:3000"}/cancel`,
    customer_email: userEmail,
  });

  return NextResponse.json({ id: session.id });
}