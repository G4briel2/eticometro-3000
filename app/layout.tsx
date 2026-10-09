import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eticômetro — Avaliação ética profissional",
  description: "Avaliação ética de situações e dilemas do ambiente corporativo.",
  openGraph: {
    title: "Eticômetro — Avaliação ética profissional",
    description: "Avaliação ética de situações e dilemas do ambiente corporativo.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
