import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-lg border border-emerald-400/15 bg-[#050a08] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/25 focus-visible:border-emerald-400/40 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
