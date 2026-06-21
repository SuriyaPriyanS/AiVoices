import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/lib/demo-data'

export default function Templates() {
  return (
    <section className="section-padding bg-white/[0.025]" id="industries">
      <div className="container-wide">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Playbooks</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Launch from proven business agents.</h2>
          </div>
          <Link href="/dashboard/generate" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
            Open builder <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {industries.map((industry) => (
            <article key={industry.id} className="surface flex flex-col p-5">
              <industry.icon className={`h-7 w-7 ${industry.accent}`} />
              <h3 className="mt-5 text-xl font-bold">{industry.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{industry.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {industry.automations.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
