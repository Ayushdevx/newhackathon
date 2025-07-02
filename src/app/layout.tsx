import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hackfinity 2025 - World's Biggest Agentic AI Hackathon",
  description: "Join Hackfinity 2025 - Infinite Fun. Infinite Creativity. From Caffeine to Code – Experience the Best. October 18, 2025.",
  keywords: "hackathon, AI, machine learning, blockchain, innovation, programming, developers",
  openGraph: {
    title: "Hackfinity 2025 - World's Biggest Agentic AI Hackathon",
    description: "Join thousands of developers in the ultimate coding challenge. Huge prizes, amazing swags, and infinite creative freedom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} ${orbitron.variable} antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
