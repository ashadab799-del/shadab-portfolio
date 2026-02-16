import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shadab Akhtar | Packet Core & AI Engineer",
  description:
    "Portfolio of Shadab Akhtar – Packet Core, Telecom Networks, Linux, Wireshark, and AI-driven solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
