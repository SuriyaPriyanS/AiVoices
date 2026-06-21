'use client'

import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  Bot,
  Clock3,
  Mic,
  PhoneOff,
  Play,
  RotateCcw,
  Settings2,
  UserRound,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { industries } from '@/lib/demo-data'
import { cn } from '@/lib/utils'

const transcript = [
  {
    role: 'agent',
    text: "Hello and welcome to CarBot AI. I'm your AI assistant, here to help with appointments, support, pricing, and general questions. How can I assist you today?",
    time: '08:07 PM',
  },
  {
    role: 'user',
    text: 'Can you tell me what other services are available?',
    time: '08:07 PM',
  },
  {
    role: 'agent',
    text: 'We offer a brake inspection starting at $39.99, which takes about 45 minutes. We also provide oil changes for $50, which usually takes about two hours. Is there a specific service you are interested in or do you need more details?',
    time: '08:07 PM',
  },
]

export default function CommercialGenerator() {
  const [industryId, setIndustryId] = useState('auto-repair')
  const selected = useMemo(
    () => industries.find((industry) => industry.id === industryId) || industries[1],
    [industryId]
  )

  return (
    <div className="min-h-[calc(100vh-7rem)] text-slate-200">
      <div className="mb-5 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="ghost" className="text-slate-500 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 shadow-[0_0_26px_rgba(34,197,94,.18)]">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold text-white">Welcome</h1>
                <span className="rounded-md border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-300">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-600">Voice: alloy · professional</p>
            </div>
          </div>
        </div>

        <div className="hidden pr-20 text-right xl:block">
          <p className="text-7xl font-black leading-none tracking-tight text-[#28f21f] drop-shadow-[0_0_18px_rgba(40,242,31,.32)]">
            Live Call
          </p>
          <p className="mt-2 text-3xl font-light tracking-[.24em] text-[#28f21f]">
            What&apos;s Coming Up - Voice Agents
          </p>
        </div>
      </div>

      <div className="mb-5 flex w-fit rounded-xl border border-white/10 bg-white/[0.045] p-1">
        <button className="flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-semibold text-slate-500">
          <Settings2 className="h-4 w-4" />
          Configure
        </button>
        <button className="flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.09] px-5 text-sm font-semibold text-white shadow-lg">
          <Play className="h-4 w-4" />
          Test Live
        </button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[450px_1fr] 2xl:grid-cols-[520px_1fr]">
        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5 shadow-[0_0_0_1px_rgba(255,255,255,.02)]">
          <div className="mb-5">
            <h2 className="font-extrabold text-white">Live Test</h2>
            <p className="mt-1 text-xs text-slate-600">Talk to your agent in real time</p>
          </div>

          <div className="rounded-xl border border-emerald-400/10 bg-emerald-500/[0.055] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                <Bot className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-white">Welcome</p>
                <p className="text-xs text-slate-500">alloy voice · professional</p>
              </div>
              <span className="rounded-md border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs font-black text-emerald-300">
                Active
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center py-9">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/[0.04]">
              <div className="absolute inset-4 rounded-full border border-emerald-400/15" />
              <div className="absolute inset-8 animate-pulse rounded-full bg-emerald-500/10 blur-xl" />
              <button className="relative flex h-28 w-28 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_50px_rgba(34,197,94,.42)]" aria-label="Live microphone">
                <Mic className="h-10 w-10" />
              </button>
            </div>
            <p className="mt-5 text-sm font-bold text-emerald-400">● Listening</p>
            <p className="mt-2 text-xs text-slate-700">Speak now - the agent is hearing you</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
              <Clock3 className="h-4 w-4" />
              00:25
            </div>
            <Button className="mt-7 bg-rose-500/15 text-rose-300 hover:bg-rose-500/20" type="button">
              <PhoneOff className="h-4 w-4" />
              End Call
            </Button>
          </div>

          <div className="rounded-lg border border-sky-400/10 bg-sky-500/[0.045] p-4">
            <p className="text-sm font-bold text-sky-300">Testing tips</p>
            <ul className="mt-2 space-y-1.5 text-xs leading-5 text-sky-300/80">
              <li>Allow microphone access when prompted</li>
              <li>Test booking an appointment end-to-end</li>
              <li>Ask about services, hours, and pricing</li>
            </ul>
          </div>
        </section>

        <section className="rounded-lg border border-emerald-400/12 bg-[#08110f] p-5 shadow-[0_0_0_1px_rgba(255,255,255,.02)]">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-extrabold text-white">Conversation Transcript</h2>
              <p className="mt-1 text-xs text-slate-600">3 messages</p>
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-300">
              <RotateCcw className="h-4 w-4" />
              Clear
            </button>
          </div>

          <div className="space-y-4">
            {transcript.map((message, index) => {
              const isUser = message.role === 'user'
              return (
                <div
                  key={`${message.role}-${index}`}
                  className={cn('flex items-start gap-3', isUser && 'justify-end')}
                >
                  {!isUser && (
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <Bot className="h-4 w-4" />
                    </span>
                  )}
                  <div
                    className={cn(
                      'max-w-[76%] rounded-xl border p-4 text-sm leading-6',
                      isUser
                        ? 'border-white/10 bg-white/[0.065] text-slate-300'
                        : 'border-emerald-400/15 bg-emerald-500/[0.075] text-slate-200'
                    )}
                  >
                    <p>{message.text}</p>
                    <p className={cn('mt-2 text-xs font-semibold', isUser ? 'text-slate-600' : 'text-emerald-500/80')}>
                      {isUser ? 'You' : 'Welcome'} · {message.time}
                    </p>
                  </div>
                  {isUser && (
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.055] text-slate-500">
                      <UserRound className="h-4 w-4" />
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold text-white">Agent template</p>
                <p className="mt-1 text-xs text-slate-600">{selected.name} · {selected.automations.join(', ')}</p>
              </div>
              <select
                value={industryId}
                onChange={(event) => setIndustryId(event.target.value)}
                className="h-10 rounded-lg border border-white/10 bg-[#0b1512] px-3 text-sm text-slate-300 outline-none focus:border-emerald-400/40"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>{industry.name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
