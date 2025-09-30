import WeatherIcon from './WeatherIcon';
import { ForecastItem } from '../services/weatherService';

interface ForecastCardProps {
  forecast: ForecastItem[];
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <h3 className="text-xl font-bold mb-6">5-Day Forecast</h3>
      <div className="space-y-4">
        {forecast.map((item, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <WeatherIcon main={item.main} size="lg" />
                <div>
                  <div className="font-semibold text-lg">{item.date}</div>
                  <div className="text-blue-200 capitalize text-sm">{item.description}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl">{Math.round(item.temp_max)}°</div>
                <div className="text-blue-200 text-sm">{Math.round(item.temp_min)}°</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-blue-200">Rain:</span>
                <span className="font-medium">{item.pop}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-200">Humidity:</span>
                <span className="font-medium">{item.humidity}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-200">Wind:</span>
                <span className="font-medium">{item.wind_speed} km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}