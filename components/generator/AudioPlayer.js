import { Pause, Play } from 'lucide-react'

export default function AudioPlayer({ title = 'Sample agent greeting', duration = '0:18' }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-[0_0_20px_rgba(34,197,94,.25)]" aria-label="Play sample">
          <Play className="h-4 w-4" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-white">{title}</p>
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div className="h-2 w-1/3 rounded-full bg-emerald-500" />
          </div>
        </div>
        <span className="text-sm text-slate-500">{duration}</span>
        <Pause className="hidden h-4 w-4 text-slate-600 sm:block" />
      </div>
    </div>
  )
}
