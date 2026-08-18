import { useTheme } from "../context/ThemeContext";

const Weat = ({ weatherData, errored }) => {
  const { isDark } = useTheme();

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return (
      <div className="w-full flex flex-col items-center justify-center pt-4 px-2">
        <p
          className={`text-base sm:text-base md:text-base text-center font-semibold ${
            isDark ? "text-gray-300" : "text-white"
          }`}
        >
          Search for a city to view its weather
        </p>
      </div>
    );
  }

  {
    errored && (
      <p
        className={`text-base sm:text-base ${
          isDark ? "text-red-400" : "text-red-600"
        }`}
      >
        ‼️‼️{errored}
      </p>
    );
  }

  return [
    weatherData && (
      <div className="w-full flex flex-col items-center justify-center pt-4 sm:pt-4 px-2 sm:px-4">
        <article className="flex flex-col items-center justify-center gap-3 sm:gap-3">
          <h1
            className={`font-serif font-bold text-2xl sm:text-xl md:text-2xl text-center ${
              isDark ? "text-white" : "text-yellow"
            }`}
          >
            {weatherData.location.name}, {weatherData.location.country}
          </h1>
          <img
            src={weatherData.current.condition.icon}
            alt="weather-icon"
            className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px]   md:w-[120px] md:h-[120px]"
          />
          <article className="flex flex-col sm:flex-row gap-2 sm:gap-2 items-center justify-center">
            <h2
              className={`font-serif font-bold text-2xl sm:text-lg md:text-xl ${
                isDark ? "text-white" : "text-yellow"
              }`}
            >
              {weatherData.current.temp_c}°C,
            </h2>

            <p
              className={`font-serif font-bold text-lg sm:text-lg md:text-xl text-center ${
                isDark ? "text-white" : "text-yellow"
              }`}
            >
              {weatherData.current.condition.text}
            </p>
          </article>
        </article>
      </div>
    ),
  ];
};

export default Weat;
