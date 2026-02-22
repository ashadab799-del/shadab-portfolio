export const metadata = {
  title: "Resume",
  description:
    "Resume of Shadab Akhtar – Telecom & Packet Core Engineer with experience in EPC, network operations, and AI learning.",
};

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-10">
      
      <header>
        <h1 className="text-4xl font-bold mb-2">Shadab Akhtar</h1>
        <p className="text-slate-400">
          Telecom & Packet Core Engineer · Learning AI
        </p>
      </header>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-3 text-slate-300">
          <li>
            • Operations & maintenance of SGSN, GGSN, MME, SGW, PGW
          </li>
          <li>
            • Fault analysis and performance optimization of 2G & 4G networks
          </li>
          <li>
            • Ensured high availability of EPC and ISP infrastructure
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <p className="text-slate-300">
          Packet Core (EPC), MME, SGW/PGW, DNS (Infoblox), Linux, Wireshark,
          Network Monitoring, AI for Telecom
        </p>
      </section>

      {/* Download */}
      <section>
        <a
          href="/resume.pdf"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition"
        >
          Download Resume (PDF)
        </a>
      </section>

    </main>
  );
}