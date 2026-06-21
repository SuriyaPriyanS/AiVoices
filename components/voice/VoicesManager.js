import { Bot, CheckCircle2, Clock3, DollarSign } from 'lucide-react'
import AudioPlayer from '@/components/generator/AudioPlayer'
import { serviceCatalog } from '@/lib/demo-data'

const voices = [
  { name: 'Welcome', tone: 'alloy · professional', use: 'Primary live agent', status: 'Active' },
  { name: 'Service Advisor', tone: 'clear · confident', use: 'Repair updates', status: 'Ready' },
  { name: 'After Hours', tone: 'calm · concise', use: 'Voicemail capture', status: 'Ready' },
]

export default function VoicesManager() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f]">
        <div className="border-b border-white/10 p-4">
          <h2 className="font-extrabold text-white">Service Catalog</h2>
          <p className="mt-1 text-xs text-slate-600">Pricing and timing used in live calls</p>
        </div>
        <div className="divide-y divide-white/10">
          {serviceCatalog.map((service) => (
            <article key={service.name} className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-white">{service.name}</h3>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-400">{service.status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{service.description}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <span className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-slate-300">
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                  {service.price}
                </span>
                <span className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-2 text-slate-300">
                  <Clock3 className="h-4 w-4 text-emerald-400" />
                  {service.duration}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
        <div className="mb-5">
          <h2 className="font-extrabold text-white">Approved Voices</h2>
          <p className="mt-1 text-xs text-slate-600">Profiles available to the AI agent</p>
        </div>
        <div className="space-y-4">
          {voices.map((voice) => (
            <article key={voice.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Bot className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-white">{voice.name}</h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {voice.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{voice.tone}</p>
                  <p className="mt-1 text-xs text-slate-600">{voice.use}</p>
                </div>
              </div>
              <div className="mt-4">
                <AudioPlayer title={`${voice.name} sample`} duration="0:12" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
