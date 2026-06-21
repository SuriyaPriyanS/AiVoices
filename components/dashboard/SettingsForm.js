import { BellRing, Building2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function SettingsForm() {
  return (
    <form className="grid gap-5 xl:grid-cols-[1fr_420px]">
      <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-400">Account</p>
            <h1 className="text-3xl font-black text-white">Settings</h1>
          </div>
        </div>
        <div className="grid gap-5">
          <div>
            <Label htmlFor="business">Business name</Label>
            <Input id="business" defaultValue="AutoCare Pro Garage" />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" defaultValue="San Francisco" />
          </div>
          <div>
            <Label htmlFor="phone">Escalation phone</Label>
            <Input id="phone" defaultValue="+1 555 0199" />
          </div>
          <div>
            <Label htmlFor="policy">Agent policy</Label>
            <Textarea id="policy" rows={7} defaultValue="Be concise, confirm customer details, never invent availability, explain service prices clearly, and escalate emergencies, billing disputes, or angry callers to staff." />
          </div>
        </div>
        <Button type="button" className="mt-6">Save settings</Button>
      </section>

      <aside className="space-y-5">
        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
          <div className="flex items-center gap-3">
            <BellRing className="h-5 w-5 text-emerald-400" />
            <h2 className="font-extrabold text-white">Notifications</h2>
          </div>
          <div className="mt-4 space-y-3">
            {['Missed call summary', 'New appointment', 'Human handoff', 'Low confidence answer'].map((item) => (
              <label key={item} className="flex items-center justify-between rounded-lg border border-white/10 p-3 text-sm text-slate-400">
                {item}
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent accent-emerald-500" defaultChecked />
              </label>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <h2 className="font-extrabold text-white">Compliance</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Keep call recording disclosure, consent language, and data retention settings aligned with your local requirements before live deployment.
          </p>
        </section>
      </aside>
    </form>
  )
}
