import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems } from '@/lib/demo-data'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-wide">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-300 text-slate-950">
            <PhoneCall className="h-5 w-5" />
          </span>
          VoiceOps AI
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Build agent</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
