export const metadata = {
  title: "GoMakeAI – AI-Powered Builder",
  description: "Your personal AI-powered agents to build apps fast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

