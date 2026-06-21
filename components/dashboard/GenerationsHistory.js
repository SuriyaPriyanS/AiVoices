import { Bot, Clock3, MessageSquareText, UserRound } from 'lucide-react'
import AudioPlayer from '@/components/generator/AudioPlayer'
import { conversations } from '@/lib/demo-data'

export default function GenerationsHistory() {
  return (
    <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
      <aside className="rounded-lg border border-emerald-400/12 bg-[#08110f]">
        <div className="border-b border-white/10 p-4">
          <h2 className="font-extrabold text-white">Call History</h2>
          <p className="mt-1 text-xs text-slate-600">Recent agent conversations</p>
        </div>
        <div className="divide-y divide-white/10">
          {conversations.map((item, index) => (
            <div key={item.customer} className={`p-4 ${index === 0 ? 'bg-emerald-500/[0.055]' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-white">{item.customer}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.industry}</p>
                </div>
                <span className="flex items-center gap-1 text-xs text-slate-600">
                  <Clock3 className="h-3 w-3" />
                  {item.time}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400">{item.intent}</p>
              <p className="mt-2 text-xs font-bold text-emerald-400">{item.outcome}</p>
            </div>
          ))}
        </div>
      </aside>

      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-white">Conversation Detail</h1>
            <p className="mt-1 text-xs text-slate-600">Transcript, sentiment, and recording</p>
          </div>
          <MessageSquareText className="h-5 w-5 text-emerald-400" />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <Bot className="h-4 w-4" />
            </span>
            <div className="max-w-3xl rounded-xl border border-emerald-400/15 bg-emerald-500/[0.075] p-4 text-sm leading-6 text-slate-200">
              Hello, this is AutoCare Pro Garage. I can help book service, explain pricing, or answer shop questions.
              <p className="mt-2 text-xs font-semibold text-emerald-500/80">Welcome · 08:07 PM</p>
            </div>
          </div>
          <div className="flex items-start justify-end gap-3">
            <div className="max-w-2xl rounded-xl border border-white/10 bg-white/[0.065] p-4 text-sm leading-6 text-slate-300">
              Can you check if I can get my brakes inspected today?
              <p className="mt-2 text-xs font-semibold text-slate-600">Customer · 08:08 PM</p>
            </div>
            <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.055] text-slate-500">
              <UserRound className="h-4 w-4" />
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <Bot className="h-4 w-4" />
            </span>
            <div className="max-w-3xl rounded-xl border border-emerald-400/15 bg-emerald-500/[0.075] p-4 text-sm leading-6 text-slate-200">
              Yes. I found a 2:30 PM inspection slot. It starts at $39.99 and usually takes 45 minutes.
              <p className="mt-2 text-xs font-semibold text-emerald-500/80">Welcome · 08:08 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <AudioPlayer title="Brake inspection booking call" duration="1:42" />
        </div>
      </section>
    </div>
  )
}
