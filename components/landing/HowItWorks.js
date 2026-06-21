import { workflowSteps } from '@/lib/demo-data'

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white/[0.025]" id="workflow">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">Workflow</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">From prompt to booked appointment.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="surface p-5">
              <div className="flex items-center justify-between">
                <step.icon className="h-6 w-6 text-brand-200" />
                <span className="text-sm font-bold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
