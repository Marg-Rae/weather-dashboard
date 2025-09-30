'use client';

import { useState, useEffect } from 'react';
import { weatherService, WeatherData, ForecastItem, HourlyForecast } from './services/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import WeatherDetails from './components/WeatherDetails';
import ForecastCard from './components/ForecastCard';
import HourlyForecastCard from './components/HourlyForecastCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingState, { EmptyState } from './components/LoadingState';

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[]>([]);
  const [searchCity, setSearchCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchWeather = async (city: string) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const [weatherData, forecastData, hourlyData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city),
        weatherService.getHourlyForecast(city)
      ]);
      
      setWeather(weatherData);
      setForecast(forecastData);
      setHourlyForecast(hourlyData);
      setSearchCity('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      setError('');
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const [weatherData, forecastData, hourlyData] = await Promise.all([
              weatherService.getWeatherByCoordinates(latitude, longitude),
              weatherService.getForecast('current_location'),
              weatherService.getHourlyForecast('current_location')
            ]);
            
            setWeather(weatherData);
            setForecast(forecastData);
            setHourlyForecast(hourlyData);
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch weather data for your location.');
          } finally {
            setLoading(false);
          }
        },
        () => {
          setError('Please allow location access or search for a city manually.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Weather Dashboard</h1>
          <p className="text-blue-100 text-lg">Get current weather and forecast for any city worldwide</p>
        </div>

        {/* Search */}
        <SearchBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          onSearch={searchWeather}
          onCurrentLocation={getCurrentLocation}
          loading={loading}
        />

        {/* Error Message */}
        {error && (
          <ErrorMessage 
            message={error} 
            onDismiss={() => setError('')} 
          />
        )}

        {/* Loading State */}
        {loading && <LoadingState />}

        {/* Weather Content */}
        {weather && !loading && (
          <div className="space-y-8">
            {/* Current Weather and Hourly Forecast */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <CurrentWeatherCard weather={weather} />
              </div>
              <div className="xl:col-span-1">
                <ForecastCard forecast={forecast} />
              </div>
            </div>

            {/* Hourly Forecast */}
            {hourlyForecast.length > 0 && (
              <HourlyForecastCard hourlyData={hourlyForecast} />
            )}

            {/* Weather Details */}
            <WeatherDetails weather={weather} />
          </div>
        )}

        {/* Empty State */}
        {!weather && !loading && !error && (
          <EmptyState />
        )}
      </div>
    </div>
  );
}