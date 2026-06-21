import Link from 'next/link'
import { ArrowRight, Bot, CalendarClock, Mic2, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative">
      <div className="container-wide grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-muted-foreground">
            <Bot className="h-4 w-4 text-brand-300" />
            LLM voice agents for real local businesses
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            AI voice agents that answer, book, and follow through.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Build receptionists for front desks, service advisors for car repair shops,
            reservation hosts for restaurants, and patient intake assistants for healthcare teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/dashboard/generate">
                Configure an agent <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#industries">View playbooks</Link>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm">
            {[
              ['24/7', 'call coverage'],
              ['4', 'industry playbooks'],
              ['<2s', 'avg response'],
            ].map(([value, label]) => (
              <div key={label} className="surface-muted p-4">
                <div className="text-2xl font-bold text-brand-200">{value}</div>
                <div className="mt-1 text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Live call console</p>
              <h2 className="text-xl font-bold">Restaurant reservation agent</h2>
            </div>
            <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
              Online
            </span>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-300 text-slate-950">
                <PhoneCall className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Incoming: private dining request</p>
                <p className="text-sm text-muted-foreground">Caller wants 14 seats Friday evening</p>
              </div>
            </div>
            <div className="space-y-3 py-5 text-sm">
              <p className="rounded-lg bg-white/[0.06] p-3 text-muted-foreground">
                I can help with that. Do you prefer the main room or the garden table?
              </p>
              <p className="ml-auto max-w-[88%] rounded-lg bg-brand-300 p-3 font-medium text-slate-950">
                Garden if available. It is for a birthday.
              </p>
              <p className="rounded-lg bg-white/[0.06] p-3 text-muted-foreground">
                Great. I found 7:15 PM and added a birthday note for the host team.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                [CalendarClock, 'Booked', '7:15 PM'],
                [Mic2, 'Voice', 'Warm host'],
                [Bot, 'Action', 'CRM updated'],
              ].map(([Icon, label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <Icon className="mb-2 h-4 w-4 text-amber-200" />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
