const faqs = [
  ['Does it make real phone calls?', 'This scaffold is ready for a voice provider. The included API contracts separate call logic, LLM prompts, Supabase records, and audio generation.'],
  ['Can I use Claude or another LLM?', 'Yes. The prompt and action layer is model-agnostic. Add your provider key and route calls through the generate API.'],
  ['Is healthcare supported?', 'The healthcare playbook avoids diagnosis, captures scheduling intent, and flags urgent symptoms for human escalation. Add your compliance controls before production.'],
  ['What do I need to deploy?', 'Supabase project keys, auth redirect URLs, optional Stripe keys, and a live voice/LLM provider for production calls.'],
]

export default function FAQ() {
  return (
    <section className="section-padding bg-white/[0.025]">
      <div className="container-wide grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-200">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold">Built as a deployable starter.</h2>
        </div>
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <article key={question} className="surface p-5">
              <h3 className="font-semibold">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
