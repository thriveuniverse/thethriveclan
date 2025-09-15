export default function SuccessPage() {
  return (
    <div className="p-4">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
      <a href="/" className="text-blue-500 underline">Return to Home</a>
    </div>
  );
}