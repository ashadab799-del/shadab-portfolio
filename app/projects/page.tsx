export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-slate-300 max-w-2xl mb-12">
        A selection of my work across telecom packet core operations,
        troubleshooting, and emerging automation concepts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Packet Core Network Optimization",
            description:
              "Optimized SGSN, GGSN, MME, and EPC nodes to improve network stability, throughput, and service availability.",
            tech: "SGSN · GGSN · MME · EPC · Linux",
          },
          {
            title: "High Availability & Fault Management",
            description:
              "Handled major outages, root cause analysis, and change management for large-scale telecom infrastructure.",
            tech: "Fault Analysis · HA · Change Management",
          },
          {
            title: "Wireshark Deep Packet Analysis",
            description:
              "Used packet-level inspection to troubleshoot latency, signaling failures, and protocol-level issues.",
            tech: "Wireshark · TCP/IP · LTE Signaling",
          },
          {
            title: "Telecom Operations Automation (Concept)",
            description:
              "Designed automation ideas using scripting and AI to reduce manual intervention and improve response time.",
            tech: "Linux · Scripting · AI (Concept)",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="rounded-xl bg-slate-800 border border-slate-700 p-6 hover:border-indigo-500 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-slate-300 mb-4">
              {project.description}
            </p>
            <span className="text-sm text-indigo-400">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
