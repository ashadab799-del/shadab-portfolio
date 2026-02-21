import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="space-y-32">

      {/* HERO */}
      <AnimatedSection>
        <section className="mt-32 flex justify-center px-6">
          <div
            className="max-w-3xl w-full rounded-2xl
                       border border-white/10
                       bg-slate-900/60 backdrop-blur
                       p-10
                       hover:border-indigo-400
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Shadab Akhtar
            </h1>

            <h2 className="text-indigo-400 text-lg mb-6">
              Telecom & Packet Core Engineer · Learning AI
            </h2>

            <p className="text-slate-300 leading-relaxed mb-8">
              Telecom professional experienced in Packet Core networks
              (SGSN, GGSN, MME, SGW, PGW, EPC), DNS systems, and ISP operations.
              Currently expanding into AI for intelligent telecom automation
              and monitoring.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Packet Core",
                "EPC",
                "MME",
                "SGW / PGW",
                "Wireshark",
                "Linux",
                "AI in Telecom",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             bg-slate-800 border border-white/10
                             hover:border-indigo-400
                             transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/blog"
                className="px-6 py-2 rounded-lg
                           bg-indigo-600 hover:bg-indigo-500
                           transition font-medium"
              >
                Read Blog
              </a>

              <a
                href="/contact"
                className="px-6 py-2 rounded-lg
                           border border-white/20
                           hover:border-indigo-400
                           transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SKILLS */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["📡 Packet Core", "SGSN, GGSN, MME, SGW, PGW, EPC"],
              ["⚙️ Network Ops", "Fault analysis, optimization, ISP ops"],
              ["🖧 DNS & Systems", "Infoblox, Linux troubleshooting"],
              ["🤖 AI Learning", "AI for monitoring & automation"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10
                           bg-white/5 p-6
                           hover:border-indigo-400/40
                           hover:-translate-y-1
                           transition"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-slate-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>

          <p className="text-slate-400 mb-6">
            Open to telecom, packet core, and AI-driven network roles.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="px-6 py-3 rounded-lg
                         bg-indigo-600 hover:bg-indigo-500
                         transition font-medium"
            >
              LinkedIn
            </a>

            <a
              href="mailto:shadabakhtar283@gmail.com"
              className="px-6 py-3 rounded-lg
                         border border-white/20
                         hover:border-indigo-400
                         transition"
            >
              Email Me
            </a>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}