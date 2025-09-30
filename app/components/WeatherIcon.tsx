import { Sun, Cloud, CloudRain, CloudSnow, Zap, CloudDrizzle, Haze } from 'lucide-react';

interface WeatherIconProps {
  main: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function WeatherIcon({ main, description, size = 'md', className = '' }: WeatherIconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const iconSize = sizeClasses[size];
  const baseClass = `${iconSize} ${className}`;

  const getIcon = () => {
    switch (main?.toLowerCase()) {
      case 'clear':
        return <Sun className={`${baseClass} text-yellow-500`} />;
      case 'clouds':
        return <Cloud className={`${baseClass} text-gray-500`} />;
      case 'rain':
        return <CloudRain className={`${baseClass} text-blue-500`} />;
      case 'drizzle':
        return <CloudDrizzle className={`${baseClass} text-blue-400`} />;
      case 'snow':
        return <CloudSnow className={`${baseClass} text-blue-200`} />;
      case 'thunderstorm':
        return <Zap className={`${baseClass} text-purple-500`} />;
      case 'mist':
      case 'fog':
      case 'haze':
        return <Haze className={`${baseClass} text-gray-400`} />;
      default:
        return <Sun className={`${baseClass} text-yellow-500`} />;
    }
  };

  return getIcon();
}