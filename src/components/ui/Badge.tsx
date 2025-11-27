import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  className?: string
  onClick?: () => void
}

export function Badge({
  children,
  variant = 'default',
  className,
  onClick,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  }

  const Component = onClick ? 'button' : 'span'

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

