import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Shadab Akhtar | Telecom & Packet Core Engineer",
    template: "%s | Shadab Akhtar",
  },
  description:
    "Telecom & Packet Core Engineer with experience in SGSN, GGSN, MME, SGW, PGW, EPC, DNS (Infoblox), Linux, Wireshark. Exploring AI for intelligent telecom operations.",
  keywords: [
    "Telecom Engineer",
    "Packet Core Engineer",
    "EPC",
    "MME",
    "SGW PGW",
    "Wireshark",
    "Linux Networking",
    "Telecom AI",
  ],
  authors: [{ name: "Shadab Akhtar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
}