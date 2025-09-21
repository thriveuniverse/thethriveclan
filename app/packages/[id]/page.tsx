"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { products, ProductOption } from "../../lib/products";

// Edit these as you add more packages:
type ProductId = "1";
type OptionId = "solo" | "team" | "agency";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PackagePage({ params }: { params: { id: string } }) {
  const productId = params.id as ProductId;
  const product = products[productId];

  const [email, setEmail] = useState("");
  const [customerType, setCustomerType] = useState<OptionId>("solo");
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!product) {
      setError(`Product ID ${productId} not found.`);
    } else {
      setError("");
    }
  }, [productId, product]);

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
        body: JSON.stringify({ packageId: productId, userEmail: email, customerType }),
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

  if (error || !product) {
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">Error</h1>
        <p>{error || "Loading..."}</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      {product.img && (
        <Image src={product.img} alt={product.title} width={540} height={280} className="mb-4 rounded" />
      )}
      <p className="mb-4">{product.description}</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 mb-4 w-full"
      />
      <div className="mb-4">
        {Object.entries(product.options).map(([key, value]) => {
          const option = value as ProductOption;
          return (
            <label key={key} className="block mb-2 cursor-pointer">
              <input
                type="radio"
                value={key}
                checked={customerType === key}
                onChange={(e) => setCustomerType(e.target.value as OptionId)}
                className="mr-2"
                name="customerType"
              />
              {option.name} (&euro;{(option.amount / 100).toFixed(2)})
            </label>
          );
        })}
      </div>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        disabled={!email || sessionId.length > 0}
      >
        Buy Now
      </button>
      {sessionId && <div className="mt-4 text-green-600">Redirecting to payment... Session ID: {sessionId}</div>}
    </div>
  );
}
