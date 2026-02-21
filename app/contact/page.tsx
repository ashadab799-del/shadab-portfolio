"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <AnimatedSection>
      <main className="max-w-3xl mx-auto px-6 mt-32">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>

        <p className="text-slate-300 mb-8">
          Feel free to reach out for opportunities, collaborations,
          or discussions related to telecom networking and AI.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:shadabakhtar283@gmail.com"
            className="block rounded-lg border border-white/10 p-4
                       hover:border-indigo-400 transition"
          >
            📧 shadabakhtar283@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/shadab-akhtar-184623392"
            target="_blank"
            className="block rounded-lg border border-white/10 p-4
                       hover:border-indigo-400 transition"
          >
            💼 LinkedIn Profile
          </a>
        </div>
      </main>
    </AnimatedSection>
  );
}