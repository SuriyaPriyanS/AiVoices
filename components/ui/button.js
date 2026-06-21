import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-emerald-500 text-white shadow-[0_0_22px_rgba(34,197,94,.22)] hover:bg-emerald-400',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.075] hover:text-white',
        secondary:
          'bg-white/[0.06] text-slate-200 hover:bg-white/[0.1]',
        ghost: 'text-slate-500 hover:bg-white/[0.04] hover:text-white',
        link: 'text-emerald-400 underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-emerald-500 to-lime-400 text-slate-950 shadow-[0_0_22px_rgba(34,197,94,.25)] hover:opacity-95',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        xl: 'h-14 rounded-lg px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children, {
        className: cn(classes, props.children.props.className),
        ref,
      })
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
