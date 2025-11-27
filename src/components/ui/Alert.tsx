import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

interface AlertProps {
  title?: string
  message: string
  variant?: 'default' | 'destructive'
  className?: string
  onRetry?: () => void
}

export function Alert({
  title,
  message,
  variant = 'default',
  className,
  onRetry,
}: AlertProps) {
  return (
    <div
      className={cn(
        'rounded-lg border p-4',
        variant === 'destructive'
          ? 'border-destructive bg-destructive/10 text-destructive'
          : 'border-border bg-card',
        className
      )}
      role="alert"
    >
      <div className="flex items-start gap-3">
        {variant === 'destructive' && (
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
        )}
        <div className="flex-1">
          {title && (
            <h4 className="mb-1 font-semibold leading-none tracking-tight">
              {title}
            </h4>
          )}
          <p className="text-sm">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 text-sm font-medium underline hover:no-underline"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

