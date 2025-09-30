import { AlertTriangle, X } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export default function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg mb-8 flex items-start space-x-3">
      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-medium">Error</p>
        <p className="text-red-100">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-200 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}