import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
