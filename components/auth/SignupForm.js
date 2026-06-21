import Link from 'next/link'
import { signup } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignupForm() {
  return (
    <form action={signup} className="surface w-full max-w-md p-6">
      <h1 className="text-2xl font-bold">Create your workspace</h1>
      <p className="mt-2 text-sm text-muted-foreground">Start with a demo account and connect Supabase when ready.</p>
      <div className="mt-6 space-y-4">
        <div>
          <Label htmlFor="name">Workspace name</Label>
          <Input id="name" name="name" required placeholder="Acme Services" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required minLength={8} placeholder="Minimum 8 characters" />
        </div>
      </div>
      <Button className="mt-6 w-full" type="submit">Create account</Button>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Already have an account? <Link href="/login" className="font-semibold text-brand-200">Sign in</Link>
      </p>
    </form>
  )
}
