// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "GoMakeAI",
  description: "Bring your ideas to life with AI-powered tools and MegaGTP agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
