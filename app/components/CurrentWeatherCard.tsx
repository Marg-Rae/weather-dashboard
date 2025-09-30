import WeatherIcon from './WeatherIcon';
import { WeatherData } from '../services/weatherService';

interface CurrentWeatherProps {
  weather: WeatherData;
}

export default function CurrentWeatherCard({ weather }: CurrentWeatherProps) {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">{weather.name}, {weather.country}</h2>
          <p className="text-blue-100 capitalize mb-2">{weather.description}</p>
          <div className="text-blue-200 text-sm">
            <div>{getCurrentDate()}</div>
            <div>{getCurrentTime()}</div>
          </div>
        </div>
        <WeatherIcon main={weather.main} size="xl" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-6xl font-bold mb-2">{Math.round(weather.temp)}°C</div>
          <div className="text-blue-100 text-lg">Feels like {Math.round(weather.feels_like)}°C</div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-blue-200">Humidity:</span>
            <span className="font-semibold">{weather.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Wind:</span>
            <span className="font-semibold">{weather.wind_speed} km/h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Pressure:</span>
            <span className="font-semibold">{weather.pressure} hPa</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-200">Visibility:</span>
            <span className="font-semibold">{weather.visibility} km</span>
          </div>
        </div>
      </div>
    </div>
  );
}