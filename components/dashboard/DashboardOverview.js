import Link from 'next/link'
import { ArrowRight, Bot, CalendarCheck, Clock3, PhoneIncoming, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { appointments, conversations, metrics, serviceCatalog } from '@/lib/demo-data'

export default function DashboardOverview() {
  return (
    <div className="space-y-5 text-slate-200">
      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-400">Overview</p>
            <h1 className="mt-2 text-3xl font-black text-white">AutoCare Pro Garage</h1>
            <p className="mt-2 text-sm text-slate-600">Live agent coverage, appointment flow, and service demand.</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/generate">
              Open Agent Studio <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-emerald-400/10 bg-white/[0.035] p-4">
            <p className="text-xs font-semibold text-slate-600">{metric.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-3xl font-black text-white">{metric.value}</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">{metric.change}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_420px]">
        <div className="rounded-lg border border-emerald-400/12 bg-[#08110f]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <h2 className="font-extrabold text-white">Today&apos;s Appointments</h2>
              <p className="text-xs text-slate-600">Booked and updated by the voice agent</p>
            </div>
            <CalendarCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="divide-y divide-white/10">
            {appointments.map((appointment) => (
              <div key={`${appointment.customer}-${appointment.time}`} className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-white">{appointment.customer}</p>
                    <p className="mt-1 text-sm text-slate-500">{appointment.vehicle} · {appointment.service}</p>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-bold text-slate-300">{appointment.time}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-400">{appointment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-extrabold text-white">Agent Status</h2>
              <p className="text-xs text-slate-600">Welcome · alloy voice</p>
            </div>
            <span className="rounded-md border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs font-black text-emerald-300">
              Active
            </span>
          </div>
          <div className="rounded-xl border border-emerald-400/10 bg-emerald-500/[0.045] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_28px_rgba(34,197,94,.35)]">
                <Bot className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-white">Listening for service calls</p>
                <p className="text-sm text-slate-500">Auto triage, pricing, booking, and FAQs</p>
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {conversations.map((item) => (
              <div key={item.customer} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold text-white">{item.customer}</p>
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <Clock3 className="h-3 w-3" />
                    {item.time}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="font-extrabold text-white">Service Catalog</h2>
          <PhoneIncoming className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="grid gap-3 p-5 lg:grid-cols-3">
          {serviceCatalog.map((service) => (
            <article key={service.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-white">{service.name}</h3>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">{service.status}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{service.description}</p>
              <p className="mt-4 text-sm font-bold text-slate-300">{service.price} · {service.duration}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
