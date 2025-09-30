import WeatherIcon from './WeatherIcon';
import { HourlyForecast } from '../services/weatherService';

interface HourlyForecastProps {
  hourlyData: HourlyForecast[];
}

export default function HourlyForecastCard({ hourlyData }: HourlyForecastProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
      <h3 className="text-xl font-bold mb-6">Hourly Forecast</h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-2" style={{ minWidth: 'max-content' }}>
          {hourlyData.map((item, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 min-w-[120px] text-center">
              <div className="text-blue-200 text-sm mb-2">{item.time}</div>
              <div className="flex justify-center mb-2">
                <WeatherIcon main={item.main} size="md" />
              </div>
              <div className="font-bold text-lg mb-1">{Math.round(item.temp)}°C</div>
              <div className="text-blue-200 text-xs mb-2 capitalize">{item.description}</div>
              <div className="text-blue-300 text-xs">
                <span className="block">💧 {item.pop}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}