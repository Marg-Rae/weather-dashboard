export const formatTemperature = (temp: number, unit: 'C' | 'F' = 'C'): string => {
  const rounded = Math.round(temp);
  return `${rounded}°${unit}`;
};

export const formatWindSpeed = (speed: number, unit: 'kmh' | 'mph' = 'kmh'): string => {
  const rounded = Math.round(speed);
  return `${rounded} ${unit === 'kmh' ? 'km/h' : 'mph'}`;
};

export const formatPressure = (pressure: number): string => {
  return `${pressure} hPa`;
};

export const formatVisibility = (visibility: number): string => {
  return `${visibility} km`;
};

export const formatHumidity = (humidity: number): string => {
  return `${humidity}%`;
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

export const getUVIndexCategory = (uvIndex: number): { category: string; color: string; description: string } => {
  if (uvIndex <= 2) {
    return {
      category: 'Low',
      color: 'text-green-400',
      description: 'No protection needed'
    };
  } else if (uvIndex <= 5) {
    return {
      category: 'Moderate',
      color: 'text-yellow-400',
      description: 'Some protection required'
    };
  } else if (uvIndex <= 7) {
    return {
      category: 'High',
      color: 'text-orange-400',
      description: 'Protection essential'
    };
  } else if (uvIndex <= 10) {
    return {
      category: 'Very High',
      color: 'text-red-400',
      description: 'Extra protection required'
    };
  } else {
    return {
      category: 'Extreme',
      color: 'text-purple-400',
      description: 'Avoid sun exposure'
    };
  }
};

export const formatTime = (timeString: string): string => {
  try {
    const date = new Date(`1970-01-01T${timeString}:00`);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return timeString;
  }
};

export const getTimeOfDay = (): 'morning' | 'afternoon' | 'evening' | 'night' => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
};

export const getGreeting = (): string => {
  const timeOfDay = getTimeOfDay();
  const greetings = {
    morning: 'Good morning!',
    afternoon: 'Good afternoon!',
    evening: 'Good evening!',
    night: 'Good evening!'
  };
  
  return greetings[timeOfDay];
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDayOfWeek = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export const getFormattedDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};