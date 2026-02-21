import Link from "next/link"

export default function BlogHighlights() {
  return (
    <section className="py-24 bg-white/2">
      <h2 className="text-3xl font-bold text-center">
        From the Blog
      </h2>

      <p className="text-center text-muted-foreground mt-3">
        Writing about packet core, reliability, and AI
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-6">
        <Link href="/blog/packet-core-basics" className="rounded-xl bg-white/5 p-6 border border-white/10 hover:scale-[1.02] transition">
          <h3 className="font-semibold">Packet Core Basics</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Understanding SGSN, GGSN, MME, SGW, and PGW.
          </p>
        </Link>

        <Link href="/blog" className="rounded-xl bg-white/5 p-6 border border-white/10 hover:scale-[1.02] transition">
          <h3 className="font-semibold">Reliability Engineering</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Fault analysis and operational insights.
          </p>
        </Link>

        <Link href="/blog" className="rounded-xl bg-white/5 p-6 border border-white/10 hover:scale-[1.02] transition">
          <h3 className="font-semibold">AI in Telecom</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Automation and intelligent systems.
          </p>
        </Link>
      </div>
    </section>
  )
}
