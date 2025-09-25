// app/products/[slug]/ClientProductPage.tsx
"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import type { Product, ProductOption } from "@/lib/products";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ClientProductPage({ product }: { product: Product }) {
  const [email, setEmail] = useState("");
  const [customerType, setCustomerType] = useState<keyof typeof product.options>("solo");
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: product.id, userEmail: email, customerType }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const { id } = await response.json();
      setSessionId(id);

      if (id) {
        const stripe = await stripePromise;
        if (!stripe) throw new Error("Stripe failed to initialize.");
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) setError(error.message || "Stripe checkout failed.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Failed to start checkout. Check console for details.");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href={`/${product.sector}`} className="hover:underline">
          ← Back to sector
        </Link>
      </nav>

      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>

      {product.img && (
        <div className="relative w-full h-64 mb-8">
          <Image src={product.img} alt={product.title} fill className="object-cover rounded-lg" />
        </div>
      )}

      {product.description && (
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 mb-4 w-full"
      />

      <div className="mb-4">
        {Object.entries(product.options).map(([key, value]) => {
          const option = value as ProductOption; // Type assertion to fix 'unknown'
          return (
            <label key={key} className="block mb-2 cursor-pointer">
              <input
                type="radio"
                value={key}
                checked={customerType === key}
                onChange={(e) => setCustomerType(e.target.value as keyof typeof product.options)}
                className="mr-2"
                name="customerType"
              />
              {option.name} (€{(option.amount / 100).toFixed(2)})
            </label>
          );
        })}
      </div>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <button
        onClick={handleCheckout}
        className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition disabled:opacity-50"
        disabled={!email || sessionId.length > 0}
      >
        Buy Now
      </button>

      {sessionId && <div className="mt-4 text-green-600">Redirecting to payment... Session ID: {sessionId}</div>}
    </main>
  );
}