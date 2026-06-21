import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/lib/demo-data'

export default function Pricing() {
  return (
    <section className="section-padding" id="pricing">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Plans for operators and builders.</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`surface p-6 ${plan.featured ? 'border-brand-300/60 bg-brand-300/[0.08]' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                {plan.featured && (
                  <span className="rounded-full bg-brand-300 px-2.5 py-1 text-xs font-bold text-slate-950">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-6 text-4xl font-extrabold">
                {plan.price}
                <span className="text-base font-medium text-muted-foreground">/mo</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-brand-200" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={plan.featured ? 'default' : 'outline'}>
                <Link href="/signup">Start {plan.name}</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
