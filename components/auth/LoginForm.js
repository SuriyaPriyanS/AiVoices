import Link from 'next/link'
import { login } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  return (
    <form action={login} className="surface w-full max-w-md p-6">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="mt-2 text-sm text-muted-foreground">Open your voice-agent command center.</p>
      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-xs font-semibold text-brand-200">Reset</Link>
          </div>
          <Input id="password" name="password" type="password" required placeholder="••••••••" />
        </div>
      </div>
      <Button className="mt-6 w-full" type="submit">Sign in</Button>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        New here? <Link href="/signup" className="font-semibold text-brand-200">Create an account</Link>
      </p>
    </form>
  )
}
