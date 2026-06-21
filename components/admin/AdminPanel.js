import { ShieldCheck, Users } from 'lucide-react'
import { metrics } from '@/lib/demo-data'

export default function AdminPanel() {
  return (
    <div className="space-y-6">
      <section className="surface p-6">
        <ShieldCheck className="h-7 w-7 text-brand-200" />
        <h1 className="mt-4 text-3xl font-bold">Admin console</h1>
        <p className="mt-2 text-muted-foreground">Monitor tenants, usage, and operational guardrails.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="surface p-5">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </section>
      <section className="surface p-6">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-amber-200" />
          <h2 className="font-semibold">Demo tenants</h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['North Clinic', 'Mesa Table', 'BayLine Auto'].map((tenant) => (
            <div key={tenant} className="rounded-lg border border-white/10 p-4 text-sm">{tenant}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
