import { conversations, metrics } from '@/lib/demo-data'

export default function Showcase() {
  return (
    <section className="section-padding" id="showcase">
      <div className="container-wide grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="surface p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Operations</p>
          <h2 className="mt-3 text-3xl font-bold">Monitor calls, outcomes, and staff handoffs.</h2>
          <p className="mt-4 text-muted-foreground">
            The dashboard tracks every conversation and turns each call into structured business data for Supabase.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="surface-muted p-4">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-xs font-semibold text-emerald-200">{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="surface overflow-hidden">
          <div className="border-b border-white/10 px-5 py-4">
            <h3 className="font-semibold">Recent conversations</h3>
          </div>
          <div className="divide-y divide-white/10">
            {conversations.map((item) => (
              <div key={item.customer} className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-semibold">{item.customer}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.industry} · {item.intent}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-brand-200">{item.outcome}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
