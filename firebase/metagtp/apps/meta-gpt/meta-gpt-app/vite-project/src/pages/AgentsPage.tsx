// src/pages/AgentsPage.tsx
import Footer from "../components/Footer";

const agents = [
  { name: "Stef AI", role: "Developer", avatar: "/avatars/stefai.png" },
  { name: "Curt Dog", role: "Full Stack Dev", avatar: "/avatars/curtdog.png" },
  { name: "Big D", role: "Research / Data Analyst", avatar: "/avatars/bigd.png" },
  { name: "Samartino", role: "UI/UX Designer", avatar: "/avatars/samartino.png" },
  { name: "Tio", role: "Delivery Agent", avatar: "/avatars/tio.png" },
  { name: "Markus", role: "Marketing Agent", avatar: "/avatars/markus.png" },
  { name: "Clarissa", role: "Customer Service Agent", avatar: "/avatars/clarissa.png" },
  { name: "Pistol Pete", role: "Products & E‑commerce Agent", avatar: "/avatars/pistolpete.png" },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Meet Our AI Team
      </h1>
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-zinc-900 p-6 rounded-2xl border border-purple-800 flex flex-col items-center hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <p className="font-bold text-lg">{agent.name}</p>
            <p className="text-sm text-gray-400 mb-2">{agent.role}</p>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
