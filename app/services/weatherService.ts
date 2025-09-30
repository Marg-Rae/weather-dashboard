export interface WeatherData {
  name: string;
  country: string;
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  description: string;
  icon: string;
  main: string;
  uv_index?: number;
  sunrise?: string;
  sunset?: string;
  timezone?: number;
}

export interface ForecastItem {
  date: string;
  temp_max: number;
  temp_min: number;
  description: string;
  icon: string;
  main: string;
  humidity: number;
  wind_speed: number;
  pop: number; // Probability of precipitation
}

export interface HourlyForecast {
  time: string;
  temp: number;
  description: string;
  icon: string;
  main: string;
  pop: number;
}

class WeatherService {
  private readonly API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || 'demo_key';
  private readonly BASE_URL = 'https://api.openweathermap.org/data/2.5';

  // Mock data for demo purposes
  private mockWeatherData: WeatherData = {
    name: 'Mombasa',
    country: 'KE',
    temp: 28,
    feels_like: 32,
    humidity: 78,
    pressure: 1013,
    visibility: 10,
    wind_speed: 15,
    wind_deg: 120,
    description: 'Partly cloudy',
    icon: '02d',
    main: 'Clouds',
    uv_index: 8,
    sunrise: '06:30',
    sunset: '18:45',
    timezone: 10800
  };

  private mockForecastData: ForecastItem[] = [
    { 
      date: 'Today', 
      temp_max: 28, 
      temp_min: 24, 
      description: 'Partly cloudy', 
      icon: '02d', 
      main: 'Clouds',
      humidity: 78,
      wind_speed: 15,
      pop: 20
    },
    { 
      date: 'Tomorrow', 
      temp_max: 30, 
      temp_min: 25, 
      description: 'Sunny', 
      icon: '01d', 
      main: 'Clear',
      humidity: 65,
      wind_speed: 12,
      pop: 5
    },
    { 
      date: 'Friday', 
      temp_max: 29, 
      temp_min: 23, 
      description: 'Light rain', 
      icon: '10d', 
      main: 'Rain',
      humidity: 85,
      wind_speed: 18,
      pop: 80
    },
    { 
      date: 'Saturday', 
      temp_max: 27, 
      temp_min: 22, 
      description: 'Cloudy', 
      icon: '03d', 
      main: 'Clouds',
      humidity: 72,
      wind_speed: 14,
      pop: 30
    },
    { 
      date: 'Sunday', 
      temp_max: 31, 
      temp_min: 26, 
      description: 'Sunny', 
      icon: '01d', 
      main: 'Clear',
      humidity: 60,
      wind_speed: 10,
      pop: 0
    },
  ];

  private mockHourlyData: HourlyForecast[] = [
    { time: '12:00', temp: 28, description: 'Partly cloudy', icon: '02d', main: 'Clouds', pop: 20 },
    { time: '13:00', temp: 29, description: 'Partly cloudy', icon: '02d', main: 'Clouds', pop: 15 },
    { time: '14:00', temp: 30, description: 'Sunny', icon: '01d', main: 'Clear', pop: 5 },
    { time: '15:00', temp: 31, description: 'Sunny', icon: '01d', main: 'Clear', pop: 0 },
    { time: '16:00', temp: 30, description: 'Partly cloudy', icon: '02d', main: 'Clouds', pop: 10 },
    { time: '17:00', temp: 29, description: 'Cloudy', icon: '03d', main: 'Clouds', pop: 25 },
    { time: '18:00', temp: 27, description: 'Light rain', icon: '10d', main: 'Rain', pop: 60 },
    { time: '19:00', temp: 26, description: 'Light rain', icon: '10d', main: 'Rain', pop: 70 },
  ];

  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      // In a real app, you would make an API call here
      // const response = await axios.get(`${this.BASE_URL}/weather?q=${city}&appid=${this.API_KEY}&units=metric`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return mock data with the searched city name
      return {
        ...this.mockWeatherData,
        name: city.charAt(0).toUpperCase() + city.slice(1)
      };
    } catch (error) {
      throw new Error('Failed to fetch current weather data');
    }
  }

  async getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData> {
    try {
      // In a real app, you would make an API call here
      // const response = await axios.get(`${this.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return this.mockWeatherData;
    } catch (error) {
      throw new Error('Failed to fetch weather data for your location');
    }
  }

  async getForecast(city: string): Promise<ForecastItem[]> {
    try {
      // In a real app, you would make an API call here
      // const response = await axios.get(`${this.BASE_URL}/forecast?q=${city}&appid=${this.API_KEY}&units=metric`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return this.mockForecastData;
    } catch (error) {
      throw new Error('Failed to fetch forecast data');
    }
  }

  async getHourlyForecast(city: string): Promise<HourlyForecast[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return this.mockHourlyData;
    } catch (error) {
      throw new Error('Failed to fetch hourly forecast data');
    }
  }

  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}

export const weatherService = new WeatherService();