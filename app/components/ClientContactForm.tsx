"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(), // FormData to URLSearchParams for Netlify
      });

      if (response.ok) {
        router.push("/thank-you"); // Redirect to your thank-you page
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Optional: Add user-facing error message here, e.g., via state
      alert("There was an error sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
        disabled={submitting}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2 border rounded"
        disabled={submitting}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        className="w-full p-2 border rounded"
        disabled={submitting}
      />
      <button
        type="submit"
        disabled={submitting}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}