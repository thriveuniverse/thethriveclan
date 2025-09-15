export default function CancelPage() {
  return (
    <div className="p-4">
      <h1>Payment Cancelled</h1>
      <p>Your payment was cancelled. Please try again or contact support.</p>
      <a href="/packages/1" className="text-blue-500 underline">Try Again</a>
    </div>
  );
}