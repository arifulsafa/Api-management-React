import { cn } from '@/lib/utils'
import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  className?: string
  children: ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  className?: string
  children: ReactNode
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  className?: string
  children: ReactNode
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  )
}

interface CardContentProps {
  className?: string
  children: ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={cn('relative w-full overflow-hidden rounded-t-lg', className)}>
      <img
        src={src}
        alt={alt}
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

