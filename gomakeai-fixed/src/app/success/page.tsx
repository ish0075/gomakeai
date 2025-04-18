export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">🎉 Payment Successful</h1>
      <p className="text-lg text-zinc-300">Thanks for your purchase! Your bots are being activated.</p>
      <a href="/" className="mt-6 inline-block text-purple-400 underline">← Go back home</a>
    </div>
  );
}
