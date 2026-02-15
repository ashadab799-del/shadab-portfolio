export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-slate-100">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Shadab Akhtar
        </h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl">
          From packet core reliability to AI-driven possibilities.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-medium hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          I am a Change Management Packet Core Engineer with hands-on experience
          in operating and maintaining large-scale telecom core networks.
          Skilled in Linux systems, Wireshark-based troubleshooting, and mobile
          core architecture across 2G and 4G networks. I am also exploring
          AI-driven approaches to automation and network intelligence.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Packet Core (SGSN, GGSN, MME, S-GW, P-GW, EPC)",
            "2G / 4G Mobile Core Architecture",
            "Network Operations & Fault Analysis",
            "Linux Systems & Server Operations",
            "Wireshark & Deep Packet Inspection",
            "DNS (Infoblox) & ISP Networks",
            "High Availability & Performance Optimization",
            "AI & Automation (Learning & Applied)",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl bg-slate-800 p-5 border border-slate-700 hover:border-indigo-500 transition"
            >
              <p className="text-slate-200">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-700"
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Packet Core Network Optimization",
              desc: "Improved stability and performance of core network elements through proactive monitoring and tuning.",
            },
            {
              title: "High Availability & Fault Resolution",
              desc: "Handled critical outages, root cause analysis, and service restoration for large-scale telecom infrastructure.",
            },
            {
              title: "Telecom Operations Automation",
              desc: "Conceptual automation ideas using scripts and AI to reduce manual intervention.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-slate-800 p-6 border border-slate-700 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-700">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <p className="text-slate-300 max-w-2xl">
          I write about telecom networks, packet core operations, Linux,
          troubleshooting, and the intersection of AI with real-world
          engineering.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-slate-700 py-10 text-center text-slate-400"
      >
        <p>© {new Date().getFullYear()} Shadab Akhtar</p>
        <p className="mt-2 text-sm">
          Packet Core Engineer · Telecom · AI
        </p>
      </footer>
    </main>
  );
}
