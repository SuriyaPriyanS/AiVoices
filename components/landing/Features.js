import { Brain, Database, MessagesSquare, Route, Workflow, Zap } from 'lucide-react'

const features = [
  {
    icon: MessagesSquare,
    title: 'Real-time voice conversations',
    description: 'Stream customer speech into an LLM workflow and answer with a consistent, trained voice.',
  },
  {
    icon: Database,
    title: 'Supabase customer memory',
    description: 'Persist contacts, call transcripts, appointment details, preferences, and staff notes.',
  },
  {
    icon: Workflow,
    title: 'Business-specific workflows',
    description: 'Use reusable prompts and action schemas for bookings, triage, follow-ups, and escalation.',
  },
  {
    icon: Route,
    title: 'Human handoff rules',
    description: 'Route urgent, sensitive, or high-value calls to staff with summaries already attached.',
  },
  {
    icon: Brain,
    title: 'LLM prompt studio',
    description: 'Control tone, policies, allowed actions, objection handling, and industry guardrails.',
  },
  {
    icon: Zap,
    title: 'Deployable SaaS foundation',
    description: 'Authentication, dashboard pages, APIs, and database schema are ready for provider keys.',
  },
]

export default function Features() {
  return (
    <section className="section-padding" id="features">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Platform</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Everything needed to run voice agents as a SaaS.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="surface p-5">
              <feature.icon className="h-6 w-6 text-brand-200" />
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
