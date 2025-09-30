import { Droplets, Wind, Eye, Gauge, Sunrise, Sunset, Thermometer } from 'lucide-react';
import { WeatherData } from '../services/weatherService';

interface WeatherDetailsProps {
  weather: WeatherData;
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  const details = [
    {
      icon: <Droplets className="w-5 h-5 text-blue-400" />,
      label: 'Humidity',
      value: `${weather.humidity}%`,
      description: 'Relative humidity'
    },
    {
      icon: <Wind className="w-5 h-5 text-green-400" />,
      label: 'Wind Speed',
      value: `${weather.wind_speed} km/h`,
      description: `Direction: ${weather.wind_deg}°`
    },
    {
      icon: <Gauge className="w-5 h-5 text-purple-400" />,
      label: 'Pressure',
      value: `${weather.pressure} hPa`,
      description: 'Atmospheric pressure'
    },
    {
      icon: <Eye className="w-5 h-5 text-yellow-400" />,
      label: 'Visibility',
      value: `${weather.visibility} km`,
      description: 'Clear visibility range'
    },
    {
      icon: <Thermometer className="w-5 h-5 text-red-400" />,
      label: 'Feels Like',
      value: `${Math.round(weather.feels_like)}°C`,
      description: 'Perceived temperature'
    },
    {
      icon: <Sunrise className="w-5 h-5 text-orange-400" />,
      label: 'UV Index',
      value: weather.uv_index ? `${weather.uv_index}` : 'N/A',
      description: weather.uv_index ? (weather.uv_index > 7 ? 'High' : weather.uv_index > 4 ? 'Moderate' : 'Low') : 'Data unavailable'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Weather Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              {detail.icon}
              <span className="text-white font-medium">{detail.label}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{detail.value}</div>
            <div className="text-blue-200 text-sm">{detail.description}</div>
          </div>
        ))}
      </div>
      
      {weather.sunrise && weather.sunset && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
            <Sunrise className="w-6 h-6 text-orange-400" />
            <div>
              <div className="text-white font-medium">Sunrise</div>
              <div className="text-blue-200">{weather.sunrise}</div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
            <Sunset className="w-6 h-6 text-orange-600" />
            <div>
              <div className="text-white font-medium">Sunset</div>
              <div className="text-blue-200">{weather.sunset}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}