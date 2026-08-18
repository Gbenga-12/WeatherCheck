import Header from "../components/Header";
import Lil from "../components/Lil";
import Weat from "../components/Weat";
import axios from "axios";
import { apiurl, Api } from "../components/Api";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Card = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errored, setError] = useState(null);
  const [isGeoLoading, setIsGeoLoading] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Fetch autocomplete suggestions
  useEffect(() => {
    // 👈 2. STOP if city is short OR if user selected a city from the list
    if (city.trim().length < 1 || !showSuggestions) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const searchUrl = apiurl.replace("forecast.json", "search.json");
        const response = await axios.get(`${searchUrl}?key=${Api}&q=${city}`);
        setSuggestions(response.data);
      } catch (error) {
        console.log("Error fetching suggestions:", error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [city, showSuggestions]);

  const fetchData = async (query) => {
    try {
      const response = await axios.get(
        `${apiurl}?key=${Api}&q=${query}&days=1`,
      );
      setWeatherData(response.data);
      setError(null);
      setSuggestions([]); // 🧹 Clear suggestions
      setShowSuggestions(false); // 🛑 Hide dropdown
      return response.data;
    } catch (error) {
      console.log(error, "City not found");
      setError("City not found");
      setWeatherData(null);
    }
  };

  // 👈 3. Updated handler when clicking a city from the dropdown
  const handleSelectCity = (selectedLocation) => {
    setShowSuggestions(false); // 🛑 Immediately hide & stop re-fetching
    setSuggestions([]);
    setCity(`${selectedLocation.name}, ${selectedLocation.country}`);
    fetchData(selectedLocation.name);
  };

  // 👈 4. Helper for input changes so typing re-enables suggestions
  const handleInputChange = (e) => {
    setCity(e.target.value);
    setShowSuggestions(true); // 🟢 Show suggestions when user is actively typing
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (!city.trim()) return;
      setShowSuggestions(false); // 🛑 Hide suggestions on Enter press
      fetchData(city);
    }
  };

  const geoLocator = () => {
    if (navigator.geolocation) {
      setIsGeoLoading(true);
      setShowSuggestions(false);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const query = `${latitude},${longitude}`;

          const data = await fetchData(query);

          if (data?.location) {
            setCity(`${data.location.name}, ${data.location.country}`);
          }

          setIsGeoLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsGeoLoading(false);
        },
      );
    } else {
      setError("No, does not support geolocation");
    }
  };

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
          : "bg-gradient-to-br from-cyan-700 to-blue-900 "
      } animate-slide-dow flex flex-col w-screen sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-screen sm:h-auto p-3 sm:p-3 md:p-4 justify-center rounded-none sm:rounded-lg shadow-2xl gap-3 sm:gap-3 opacity-95 backdrop-blur-sm relative`}
    >
      {/* Theme Toggle Button - Top Right */}
      <button
        onClick={toggleTheme}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white dark:bg-slate-700 p-2 sm:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors shadow-lg"
        title={isDark ? "Light Mode" : "Dark Mode"}
      >
        {isDark ? (
          <MdLightMode className="text-2xl text-yellow" />
        ) : (
          <MdDarkMode className="text-2xl text-slate-800 fill-zinc-100" />
        )}
      </button>

      <Header
        handleSearch={handleSearch}
        setCity={setCity}
        handleInputChange={handleInputChange}
        city={city}
        geoLocator={geoLocator}
        suggestions={showSuggestions ? suggestions : []}
        handleSelectCity={handleSelectCity}
        isGeoLoading={isGeoLoading}
      />

      <Weat weatherData={weatherData} />
      {errored && (
        <p className="font-bold text-center text-sm sm:text-sm md:text-base text-red-600">
          ‼️‼️{errored}
        </p>
      )}
      <Lil hourly={weatherData.forecast?.forecastday[0]?.hour} />
    </div>
  );
};

export default Card;
