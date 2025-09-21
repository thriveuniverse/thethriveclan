"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { products } from "../../lib/products";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Define types locally
type ProductId = "1"; // Extend with other IDs as needed
type OptionId = "solo" | "team" | "agency";

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
      console.log("Loaded product:", product);
      console.log("Default customerType:", customerType);
    }
  }, [productId, product]);

  const handleCheckout = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    console.log("Checkout triggered with:", { packageId: productId, userEmail: email, customerType });
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
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Failed to start checkout. Check console for details.");
    }
  };

  if (error || !product) return <div className="p-4">{error || "Loading..."}</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
      {product.img && (
        <div className="relative w-full h-64 mb-8">
          <Image src={product.img} alt={product.title} fill className="object-cover rounded-lg" />
        </div>
      )}
      {product.description && (
        <p className="mb-6 text-gray-700 leading-relaxed">{product.description}</p>
      )}
      <div className="mb-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 mb-2 w-full"
        />
        <div className="mb-2">
          {Object.entries(product.options).map(([key, value]) => (
            <label key={key} className="flex items-center mb-2">
              <input
                type="radio"
                value={key}
                checked={customerType === key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCustomerType(e.target.value as OptionId)
                }
                className="mr-2"
              />
              {value.name} (${(value.amount / 100).toFixed(2)})
            </label>
          ))}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleCheckout}
          className="inline-block rounded-md px-6 py-3 font-medium bg-black text-white hover:opacity-90 transition"
        >
          Buy Now
        </button>
        {sessionId && <p>Redirecting to payment... Session ID: {sessionId}</p>}
      </div>
    </div>
  );
}