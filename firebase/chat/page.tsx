export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1124] text-white flex flex-col items-center justify-center px-4 py-8">

      {/* Header */}
      <header className="w-full max-w-7xl flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-white">GO MAKE </span>
          <span className="text-purple-400">AI</span>
        </h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-purple-400 transition">Features</a>
          <a href="#" className="hover:text-purple-400 transition">Login</a>
          <a href="#" className="hover:text-purple-400 transition">Sign up</a>
        </nav>
      </header>

      {/* Headline */}
      <section className="text-center mt-10 mb-6">
        <h2 className="text-3xl sm:text-5xl font-bold mb-2">
          Bring Your Ideas to Life.
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-2 rounded"></div>
      </section>

      {/* Chat Input */}
      <section className="w-full max-w-2xl flex items-center bg-gray-700/90 text-white rounded-2xl px-6 py-4 shadow-lg">
        <input
          type="text"
          placeholder="Type : Build websites, apps, marketing funnels, ecommerce stores and more...."
          className="bg-transparent flex-1 outline-none text-base placeholder-white"
        />
        <button className="ml-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-xl font-semibold transition">
          Send
        </button>
      </section>

      {/* Agent Characters */}
      <section className="text-center mt-16">
        <h3 className="text-lg font-semibold mb-6">Our Specialized Team will build it for you</h3>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            { name: "Developer", emoji: "👷‍♂️" },
            { name: "Full Stack Dev", emoji: "💻" },
            { name: "Research / Data Analyst", emoji: "🧠" },
            { name: "Delivery Agent", emoji: "📦" },
            { name: "Marketing Agent", emoji: "📢" },
            { name: "Customer Service", emoji: "🎧" },
            { name: "Product & Commerce", emoji: "🛍️" },
          ].map((agent, i) => (
            <div key={i} className="flex flex-col items-center w-32">
              <div className="text-4xl mb-2">{agent.emoji}</div>
              <span className="text-sm font-medium">{agent.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
