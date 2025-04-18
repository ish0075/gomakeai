import './globals.css';
import React from 'react';

export const metadata = {
  title: 'GoMakeAI',
  description: 'AI-powered app builder with bots',
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
