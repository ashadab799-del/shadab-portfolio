"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <AnimatedSection>
      <main className="max-w-4xl mx-auto px-6 mt-32">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <p className="text-slate-300 leading-relaxed mb-6">
          I am a Telecom & Packet Core Engineer with hands-on experience in
          operating and maintaining large-scale mobile core networks.
          I have worked on SGSN, GGSN, MME, S-GW, P-GW, EPC, and DNS (Infoblox)
          environments, ensuring high availability and service reliability.
        </p>

        <p className="text-slate-300 leading-relaxed">
          Currently, I am expanding my skills into Artificial Intelligence,
          focusing on how AI can improve telecom operations, fault detection,
          and network automation.
        </p>
      </main>
    </AnimatedSection>
  );
}