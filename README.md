# Weather Dashboard 🌤️

A modern, responsive weather dashboard built with Next.js, TypeScript, and Tailwind CSS. Get current weather conditions, hourly forecasts, and 5-day weather predictions for any city worldwide.

![Weather Dashboard](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 🔍 **City Search**: Search for weather in any city worldwide
- 📍 **Geolocation**: Automatically detect your current location
- 🌡️ **Current Weather**: Detailed current weather conditions
- ⏰ **Hourly Forecast**: 8-hour weather forecast
- � **5-Day Forecast**: Extended weather predictions
- 💧 **Weather Details**: Humidity, pressure, visibility, wind speed, and UV index
- 🌅 **Sun Times**: Sunrise and sunset information
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI**: Beautiful glass morphism design with smooth animations
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenWeatherMap API key:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   NEXT_PUBLIC_USE_REAL_API=true
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔑 API Setup

### Getting an OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API keys section
4. Generate a new API key
5. Add the API key to your `.env.local` file

### Demo Mode

The app includes mock data for demonstration purposes. If you don't have an API key, the app will still work with sample weather data.

## 🏗️ Project Structure

```
weather-dashboard/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── CurrentWeatherCard.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── ForecastCard.tsx
│   │   ├── HourlyForecastCard.tsx
│   │   ├── LoadingState.tsx
│   │   ├── SearchBar.tsx
│   │   ├── WeatherDetails.tsx
│   │   └── WeatherIcon.tsx
│   ├── services/            # API and business logic
│   │   └── weatherService.ts
│   ├── globals.css         # Global styles and Tailwind setup
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── .env.example           # Environment variables template
├── .env.local             # Your environment variables (ignored by git)
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🧩 Components

### Core Components

- **CurrentWeatherCard**: Displays current weather conditions with temperature, description, and basic metrics
- **WeatherDetails**: Shows detailed weather information including humidity, pressure, visibility, and UV index
- **ForecastCard**: 5-day weather forecast with daily highs, lows, and conditions
- **HourlyForecastCard**: Hourly forecast for the next 8 hours
- **SearchBar**: City search functionality with geolocation support
- **WeatherIcon**: Dynamic weather icons based on conditions
- **LoadingState**: Loading animations and empty states
- **ErrorMessage**: User-friendly error handling

### Services

- **weatherService**: Handles all weather API calls and data processing

## 🎨 Styling

The project uses:
- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom CSS**: Additional animations and glass morphism effects
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Theme**: Beautiful gradient backgrounds with transparency effects

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Next.js](https://nextjs.org/) for the React framework

---

Made with ❤️ using Next.js and TypeScript