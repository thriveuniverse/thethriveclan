"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { products, ProductId, OptionId } from "../../lib/products";

// Initialize Stripe outside the component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PackagePage({ params }: { params: { id: string } }) {
  const productId = (params.id as unknown) as ProductId;
  const product = products[productId];
  const [email, setEmail] = useState("");
  const [customerType, setCustomerType] = useState<OptionId>("standard");
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!product) {
      setError(`Product ID ${productId} not found.`);
    } else {
      console.log("Loaded product:", product);
    }
  }, [productId, product]);

  const handleCheckout = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      console.log("Sending checkout request:", { packageId: productId, userEmail: email, customerType });
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: productId, userEmail: email, customerType }),
      });
      console.log("Fetch response:", response);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const { id } = await response.json();
      console.log("Received session ID:", id);
      setSessionId(id);
      if (id) {
        const stripe = await stripePromise;
        if (!stripe) {
          throw new Error("Stripe failed to initialize. Check your publishable key.");
        }
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) {
          setError(error.message || "Stripe checkout failed.");
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Failed to start checkout. Check console for details.");
    }
  };

  if (error || !product) return <div className="p-4">{error || "Loading..."}</div>;

  return (
    <div className="p-4">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 mb-2 w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
      <select
        value={customerType}
        onChange={(e) => setCustomerType(e.target.value as OptionId)}
        className="border p-2 mb-2 w-full"
      >
        {Object.entries(product.options).map(([key, value]) => (
          <option key={key} value={key}>
            {value.name} (${(value.amount / 100).toFixed(2)})
          </option>
        ))}
      </select>
      <button onClick={handleCheckout} className="bg-blue-500 text-white p-2 rounded">
        Buy Now
      </button>
      {sessionId && <p>Redirecting to payment... Session ID: {sessionId}</p>}
    </div>
  );
}