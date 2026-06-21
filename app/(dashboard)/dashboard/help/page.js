import { Code2, FileQuestion, ShieldCheck } from 'lucide-react'
import { faqs } from '@/lib/demo-data'

export default function HelpPage() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f]">
        <div className="border-b border-white/10 p-5">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-400">Configure</p>
          <h1 className="mt-2 text-3xl font-black text-white">FAQs</h1>
          <p className="mt-2 text-sm text-slate-600">Answers the live agent can use during customer calls.</p>
        </div>
        <div className="divide-y divide-white/10">
          {faqs.map((faq) => (
            <article key={faq.question} className="p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FileQuestion className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="font-bold text-white">{faq.question}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="space-y-5">
        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-extrabold text-white">Widget Embed</h2>
              <p className="text-xs text-slate-600">Install the web chat and voice widget</p>
            </div>
          </div>
          <pre className="mt-5 overflow-x-auto rounded-lg border border-white/10 bg-black/25 p-4 text-xs leading-6 text-emerald-300">
{`<script
  src="https://carbot.ai/widget.js"
  data-agent="welcome"
  data-business="autocare-pro"
></script>`}
          </pre>
        </section>

        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <h2 className="font-extrabold text-white">Launch Checklist</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-500">
            {['Supabase connected', 'Voice provider connected', 'Business FAQs reviewed', 'Escalation phone verified'].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-lg border border-white/10 p-3">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent accent-emerald-500" defaultChecked={item !== 'Voice provider connected'} />
                {item}
              </label>
            ))}
          </div>
        </section>
      </aside>
    </div>
  )
}
