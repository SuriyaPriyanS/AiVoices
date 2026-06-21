import { Plus, UploadCloud, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function VoiceUploadWizard() {
  return (
    <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-400">Configure</p>
          <h1 className="mt-2 text-3xl font-black text-white">Services and voices</h1>
          <p className="mt-2 text-sm text-slate-600">Teach the agent pricing, timing, and approved voice profiles.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button type="button" variant="outline">
            <UploadCloud className="h-4 w-4" />
            Upload voice
          </Button>
          <Button type="button">
            <Plus className="h-4 w-4" />
            Add service
          </Button>
        </div>
      </div>
      <div className="mt-5 rounded-lg border border-dashed border-emerald-400/20 bg-emerald-500/[0.035] p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Wrench className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-white">Agent knowledge source</p>
            <p className="mt-1 text-xs text-slate-600">Service rows below are the answers the live agent gives during calls.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
