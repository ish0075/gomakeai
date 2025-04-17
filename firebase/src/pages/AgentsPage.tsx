import Image from "react‑image"; // or next/image if you’ve set that up

export default function AgentsPage() {
  const roles = [
    "Developer",
    "Full Stack Dev",
    "Research / Development / Data Analyst",
    "Delivery Agent",
    "Marketing Agent",
    "Customer Service Agent",
    "Products & Commerce Agent",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Specialized Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {roles.map((role) => (
          <div key={role} className="flex flex-col items-center space-y-2">
            {/* replace 🤖 with your robot SVG/Image */}
            <div className="w-16 h-16 flex items-center justify-center text-3xl">🤖</div>
            <p className="text-sm text-center">{role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

