import Link from 'next/link'
import { PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-wide flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-300 text-slate-950">
            <PhoneCall className="h-4 w-4" />
          </span>
          VoiceOps AI
        </Link>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/acceptable-use">Acceptable Use</Link>
          <Link href="/refund-policy">Refunds</Link>
        </div>
      </div>
    </footer>
  )
}
