import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Packet Core Networks | Shadab Akhtar",
  description:
    "Beginner-friendly guide to packet core networks including SGSN, GGSN, MME, and EPC.",
};

export default function PacketCorePost() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Understanding Packet Core Networks
      </h1>

      <p className="text-slate-400 mb-8">
        Feb 2026 · By Shadab Akhtar
      </p>

      <article className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          Packet core networks form the backbone of mobile data services.
          They are responsible for routing user traffic, managing sessions,
          and ensuring secure and reliable connectivity.
        </p>

        <p>
          Key components include SGSN, GGSN, MME, S-GW, and P-GW. Together,
          these elements enable authentication, mobility management, and
          data forwarding across 2G, 3G, and 4G networks.
        </p>

        <p>
          A strong understanding of packet core architecture is essential
          for troubleshooting issues, optimizing performance, and ensuring
          high availability in telecom environments.
        </p>
      </article>
    </main>
  );
}
