export default function FeaturedWork() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold text-center">
        Featured Work
      </h2>

      <p className="text-center text-muted-foreground mt-3">
        Real-world systems, reliability, and problem-solving
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-6">
        <div className="rounded-xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold">Packet Core Reliability</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Analyzed LTE packet core KPIs to identify instability and reduce failures.
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold">Operations & Monitoring</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Fault analysis, logs, alarms, and performance optimization.
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-semibold">AI & Automation</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Exploring automation and intelligent workflows for network systems.
          </p>
        </div>
      </div>
    </section>
  )
}
