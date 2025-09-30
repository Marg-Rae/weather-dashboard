import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  searchCity: string;
  setSearchCity: (city: string) => void;
  onSearch: (city: string) => void;
  onCurrentLocation: () => void;
  loading: boolean;
}

export default function SearchBar({ 
  searchCity, 
  setSearchCity, 
  onSearch, 
  onCurrentLocation, 
  loading 
}: SearchBarProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for a city... (e.g., London, New York, Tokyo)"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch(searchCity)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onSearch(searchCity)}
            disabled={loading || !searchCity.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
          <button
            onClick={onCurrentLocation}
            disabled={loading}
            className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Use current location"
          >
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}