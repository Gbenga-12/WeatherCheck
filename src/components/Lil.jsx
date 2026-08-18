import { useRef } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Lil = ({ hourly }) => {
  const scrollRef = useRef(null);
  const { isDark } = useTheme();

  const handleScroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  // Don't render anything if hourly data hasn't loaded yet
  if (!hourly || hourly.length === 0) return null;

  return (
    <div className="w-full h-auto sm:h-20 md:h-28 lg:h-36 mx-auto mt-2 px-0 sm:px-2">
      <div className="flex items-center gap-2 sm:gap-2 w-full p-1 rounded-2xl">
        {/* Left Button */}
        <button
          onClick={() => handleScroll(-250)}
          className={`text-white p-2 sm:p-2 rounded-3xl active:scale-95 transition shrink-0 z-10 ${
            isDark
              ? "bg-slate-700 hover:bg-slate-600 border border-slate-600 active:bg-blue-600"
              : "bg-gray-800 hover:bg-gray-700 border border-gray-700 active:bg-blue-600"
          }`}
          aria-label="Scroll Left"
        >
          <FaCaretLeft className="text-base sm:text-base" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-2 sm:gap-3 flex-1 min-w-0 items-center overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Map through hourly items inside the scroll box */}
          {hourly.map((hour, index) => {
            const formattedHour = new Date(hour.time).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                hour12: true,
              },
            );
            return (
              <div
                key={index}
                className={`shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 h-32 sm:h-28 md:h-32 lg:h-36 flex flex-col items-center justify-center font-medium text-sm sm:text-sm md:text-base rounded-lg shadow-sm p-1 ${
                  isDark
                    ? "bg-slate-700 text-gray-200 border border-slate-600"
                    : "bg-white-800/90 text-white border border-white-700"
                }`}
              >
                <h2 className="text-yellow text-sm sm:text-sm md:text-base">
                  {formattedHour}
                </h2>
                <img
                  src={hour.condition?.icon}
                  alt="weather-icon"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
                <h3 className={isDark ? "text-white" : "text-white"}>
                  {hour.temp_c}°C
                </h3>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleScroll(250)}
          className={`text-white p-2 sm:p-2 rounded-3xl active:scale-95 transition shrink-0 z-10 ${
            isDark
              ? "bg-slate-700 hover:bg-slate-600 border border-slate-600 active:bg-blue-600"
              : "bg-gray-800 hover:bg-gray-700 border border-gray-700 active:bg-blue-600"
          }`}
          aria-label="Scroll Right"
        >
          <FaCaretRight className="text-base sm:text-base" />
        </button>
      </div>
    </div>
  );
};

export default Lil;
