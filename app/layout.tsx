import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Emmanuel Idoko | Software Engineer & Researcher",
  description: "Portfolio of Emmanuel Idoko (Pidoxy). AI Researcher and Full Stack Engineer specializing in Computer Vision, Edge Computing, and Distributed Systems.",
  icons: {
    icon: "/favicon.ico", // You can add a favicon later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        {children}
        <Footer /> {/* Footer now appears on all pages */}
      </body>
    </html>
  );
}