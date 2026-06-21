import { updatePassword } from '@/actions/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ResetPasswordForm() {
  return (
    <form action={updatePassword} className="surface w-full max-w-md p-6">
      <h1 className="text-2xl font-bold">Choose a new password</h1>
      <p className="mt-2 text-sm text-muted-foreground">Use at least 8 characters.</p>
      <div className="mt-6">
        <Label htmlFor="password">New password</Label>
        <Input id="password" name="password" type="password" required minLength={8} placeholder="Minimum 8 characters" />
      </div>
      <Button className="mt-6 w-full" type="submit">Update password</Button>
    </form>
  )
}
