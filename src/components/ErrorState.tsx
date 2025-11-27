import { Alert } from '@/components/ui/Alert'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = 'Failed to load game data. Please refresh the page.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="w-full py-12">
      <div className="max-w-md mx-auto">
        <Alert
          title="Error Loading Products"
          message={message}
          variant="destructive"
          onRetry={onRetry}
        />
      </div>
    </div>
  )
}

