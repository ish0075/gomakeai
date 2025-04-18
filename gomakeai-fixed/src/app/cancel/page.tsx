export default function CancelPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-400">❌ Payment Canceled</h1>
      <p className="text-lg text-zinc-300">No worries. You can try again anytime.</p>
      <a href="/pricing" className="mt-6 inline-block text-purple-400 underline">← Return to pricing</a>
    </div>
  );
}
