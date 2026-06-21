import Link from 'next/link'
import { PhoneCall } from 'lucide-react'

export default function AuthLayout({ children }) {
  return (
    <main className="min-h-screen">
      <div className="container-wide flex min-h-screen flex-col py-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-300 text-slate-950">
            <PhoneCall className="h-5 w-5" />
          </span>
          VoiceOps AI
        </Link>
        <div className="flex flex-1 items-center justify-center py-12">{children}</div>
      </div>
    </main>
  )
}
