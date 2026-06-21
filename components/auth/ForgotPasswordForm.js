import Link from 'next/link'
import { resetPassword } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ForgotPasswordForm() {
  return (
    <form action={resetPassword} className="surface w-full max-w-md p-6">
      <h1 className="text-2xl font-bold">Reset password</h1>
      <p className="mt-2 text-sm text-muted-foreground">Send a reset link to your workspace email.</p>
      <div className="mt-6">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <Button className="mt-6 w-full" type="submit">Send reset link</Button>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Remembered it? <Link href="/login" className="font-semibold text-brand-200">Sign in</Link>
      </p>
    </form>
  )
}
