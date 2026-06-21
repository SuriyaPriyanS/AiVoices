import { Bell, Info, LogOut, Radio, Search, SlidersHorizontal } from 'lucide-react'
import { logout } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { hasSupabaseEnv } from '@/lib/supabase/server'

export default function DashboardHeader() {
  const live = hasSupabaseEnv()

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-400/10 bg-[#07100d]/85 backdrop-blur-xl">
      <div className="flex h-[74px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-extrabold text-white">Agent Studio</p>
          <p className="text-xs text-slate-600">Configure and test live voice</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 text-sm text-slate-500 md:flex">
            <Search className="h-4 w-4" />
            <span className="w-32">Search...</span>
            <span className="rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-slate-600">⌘K</span>
          </div>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500 sm:flex">
            <Radio className={`h-3.5 w-3.5 ${live ? 'text-emerald-300' : 'text-amber-300'}`} />
            {live ? 'Supabase live' : 'Demo mode'}
          </span>
          <Button type="button" size="icon" variant="outline" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label="Info">
            <Info className="h-4 w-4" />
          </Button>
          <Button type="button" size="icon" variant="outline" aria-label="Controls">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <form action={logout}>
            <Button type="submit" size="icon" variant="outline" aria-label="Sign out">
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
