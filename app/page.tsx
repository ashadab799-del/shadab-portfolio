import { Github, Linkedin, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Shadab Akhtar
        </h1>

        <p className="mt-4 text-xl text-slate-400 max-w-2xl">
          From packet core reliability to{" "}
          <span className="text-sky-400 font-medium">
            AI-driven possibilities
          </span>
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-sky-500 text-black rounded-xl font-medium hover:scale-105 transition">
            View Projects <ArrowRight className="inline ml-2 h-4 w-4" />
          </button>

          <button className="px-6 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
            Contact Me
          </button>
        </div>

        <div className="mt-10 flex gap-6 text-slate-400">
          <Github className="hover:text-white cursor-pointer" />
          <Linkedin className="hover:text-white cursor-pointer" />
        </div>

      </section>
{/* SKILLS SECTION */}
<section className="bg-slate-900 py-24 px-6">
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-3xl font-bold text-center mb-12">
      Skills & Expertise
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          Packet Core Networks
        </h3>
        <p className="text-slate-400 text-sm">
          SGSN, GGSN, MME, S-GW, P-GW, EPC, DNS (Infoblox), ISP Networks
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          Operations & Reliability
        </h3>
        <p className="text-slate-400 text-sm">
          High availability, fault analysis, performance optimization, incident response
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          Tools & Platforms
        </h3>
        <p className="text-slate-400 text-sm">
          Linux, Wireshark, Monitoring, Logs, Telecom OSS
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          AI & Automation
        </h3>
        <p className="text-slate-400 text-sm">
          AI concepts, automation mindset, intelligent systems exploration
        </p>
      </div>

    </div>
  </div>
</section>
{/* PROJECTS SECTION */}
<section className="bg-slate-950 py-24 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-12">
      Selected Projects
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          Packet Core Network Optimization
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Improved availability and reduced latency across EPC infrastructure
          supporting large-scale 4G networks.
        </p>
        <span className="text-sky-400 text-sm font-medium cursor-pointer">
          View details →
        </span>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          Incident Management & RCA
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Led fault analysis and root cause investigations to improve MTTR
          and network stability.
        </p>
        <span className="text-sky-400 text-sm font-medium cursor-pointer">
          View details →
        </span>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:scale-105 transition">
        <h3 className="text-lg font-semibold mb-2">
          AI-Driven Network Insights (Exploration)
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Exploring AI and automation concepts to enhance monitoring,
          anomaly detection, and decision-making.
        </p>
        <span className="text-sky-400 text-sm font-medium cursor-pointer">
          View details →
        </span>
      </div>

    </div>
  </div>
</section>
<div className="h-24" />
{/* FOOTER */}
<footer className="bg-slate-900 border-t border-slate-800 py-10 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    <div className="text-center md:text-left">
      <h3 className="font-semibold text-lg">Shadab Akhtar</h3>
      <p className="text-slate-400 text-sm">
        Change Management Packet Core Engineer · AI Enthusiast
      </p>
    </div>

    <div className="flex gap-6 text-slate-400">
      <a href="#" className="hover:text-white transition">GitHub</a>
      <a href="#" className="hover:text-white transition">LinkedIn</a>
      <a href="mailto:your@email.com" className="hover:text-white transition">
        Email
      </a>
    </div>
  </div>

  <p className="text-center text-slate-500 text-xs mt-6">
    © {new Date().getFullYear()} Shadab Akhtar. All rights reserved.
  </p>
</footer>
    </main>
  )
}
