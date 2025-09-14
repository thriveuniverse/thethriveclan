"use client";
import { useState, useEffect } from "react";
import { products, ProductId, OptionId } from "../../lib/products";

export default function PackagePage({ params }: { params: { id: string } }) {
  // Safely cast string to ProductId via unknown
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
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      window.location.href = `https://checkout.stripe.com/pay/${id}?key=${publishableKey}`;
    }
  } catch (error) {
    console.error("Checkout error:", error);
    setError("Failed to start checkout. Check console for details.");
  }
};