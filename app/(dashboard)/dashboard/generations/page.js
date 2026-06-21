import GenerationsHistory from '@/components/dashboard/GenerationsHistory'

export default function GenerationsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-400">Conversations</p>
        <h1 className="mt-2 text-3xl font-black text-white">Call transcripts</h1>
        <p className="mt-2 text-sm text-slate-600">Review outcomes, recordings, and handoff details.</p>
      </section>
      <GenerationsHistory />
    </div>
  )
}
