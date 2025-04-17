import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChatPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-6 py-12">
        <h1 className="text-4xl text-purple-400 font-bold text-center mb-6">
          Chat with Your MGX Agents
        </h1>
        <div className="bg-zinc-900 p-6 rounded-xl max-w-3xl mx-auto text-zinc-300 shadow-lg">
          <p className="mb-4">This is where Stef AI, Curt Dog and your crew will chat with the user.</p>
          <p className="italic text-purple-400">"Hey, what do you want us to build today?"</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
