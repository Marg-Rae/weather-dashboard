import { Cloud, Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading weather data..." }: LoadingStateProps) {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
      <p className="text-blue-100">Please wait while we fetch the latest information</p>
    </div>
  );
}

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ 
  title = "Welcome to Weather Dashboard", 
  description = "Search for a city or allow location access to get started" 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Cloud className="w-24 h-24 text-white/50 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}