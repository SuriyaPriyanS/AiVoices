'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, ChevronDown, Mic } from 'lucide-react'
import { dashboardNav } from '@/lib/demo-data'
import { cn } from '@/lib/utils'

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-b border-white/10 bg-[#07100d]/95 lg:fixed lg:inset-y-0 lg:left-0 lg:w-60 lg:border-b-0 lg:border-r lg:border-emerald-400/10">
      <div className="flex h-[74px] items-center px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-[0_0_22px_rgba(34,197,94,.35)]">
            <Mic className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </span>
          <span>
            <span className="block text-sm font-extrabold leading-4 text-white">CarBot AI</span>
            <span className="block text-xs font-medium text-emerald-400">Voice Platform</span>
          </span>
        </Link>
      </div>
      <div className="mx-3 mb-6 rounded-lg border border-white/10 bg-white/[0.045] p-2">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-xs font-black text-white">AU</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-white">AutoCare Pro Garage</p>
            <p className="text-xs text-slate-500">San Francisco</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,.8)]" />
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-3 pb-4 lg:block lg:space-y-6 lg:overflow-visible">
        {dashboardNav.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-[.18em] text-slate-600">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href && item.label === 'AI Agents'
                return (
                  <Link
                    key={`${group.label}-${item.label}`}
                    href={item.href}
                    className={cn(
                      'flex shrink-0 items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-sm font-semibold text-slate-500 transition hover:bg-white/[0.04] hover:text-slate-200',
                      active && 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300 shadow-[inset_3px_0_0_rgba(34,197,94,.9)]'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="flex-1">{item.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="absolute bottom-4 left-3 right-3 hidden rounded-lg border border-white/10 bg-white/[0.035] p-3 lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <Bot className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-white">Agent workspace</p>
            <p className="text-[11px] text-slate-500">Live voice enabled</p>
          </div>
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </div>
      </div>
    </aside>
  )
}
