import { IoSearchSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { useTheme } from "../context/ThemeContext";

const Header = ({
  handleSearch,
  handleInputChange,
  city,
  geoLocator,
  suggestions = [],
  handleSelectCity,
  isGeoLoading,
}) => {
  const { isDark } = useTheme();

  return (
    <div className="w-full flex flex-col items-center px-2 md:px-4">
      <article>
        <h1
          className={`font-serif font-bold text-3xl sm:text-2xl md:text-3xl mb-2 text-center ${
            isDark ? "text-yellow" : "text-yellow"
          }`}
        >
          WEATHER CHECK
        </h1>
      </article>

      <article
        className={`relative flex w-full sm:w-[340px] md:w-[400px] lg:w-[400px] items-center justify-center gap-1 sm:gap-2 border-2 rounded-lg ${
          isDark ? "bg-slate-700 border-slate-500" : "bg-white border-zinc-500"
        }`}
      >
        <div
          className={`flex items-center rounded-xl w-full md:w-[340px] justify-center gap-1 sm:gap-2 p-2 sm:p-2 ${
            isDark ? "bg-slate-700" : "bg-white"
          }`}
        >
          <IoSearchSharp
            className={`text-2xl sm:text-2xl md:text-3xl font-extrabold shrink-0 ${
              isDark ? "text-gray-300" : "text-black"
            }`}
          />
          <input
            type="text"
            className={`text-base sm:text-sm md:text-base font-semibold w-full h-10 sm:h-[30px] focus:outline-none pl-1 ${
              isDark
                ? "bg-slate-700 text-white placeholder:text-gray-400"
                : "bg-white text-black placeholder:text-gray-500"
            }`}
            placeholder="Search for a city..."
            onKeyDown={handleSearch}
            onChange={handleInputChange}
            value={city}
          />
        </div>

        {/* --- GEOLOCATOR BUTTON WITH STYLIZED TOOLTIP --- */}
        <div className="relative group mr-1.5">
          {/* Button */}
          <div
            onClick={isGeoLoading ? undefined : geoLocator}
            className={`flex items-center justify-center bg-green rounded-lg p-1.5 sm:p-2 transition-all shrink-0 ${
              isGeoLoading
                ? "cursor-wait opacity-75"
                : "cursor-pointer hover:bg-green-500"
            }`}
          >
            <GrLocation
              className={`text-lg sm:text-xl md:text-2xl font-bold text-white ${
                isGeoLoading ? "cursor-wait animate-pulse" : "cursor-pointer"
              }`}
            />
          </div>

          {/* Stylized Floating Tooltip */}
          {!isGeoLoading && (
            <div className="absolute -top-14 right-0 sm:right-1/2 sm:translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom bg-gray-900 text-white p-2 rounded-xl shadow-2xl pointer-events-none whitespace-nowrap z-30 flex flex-col items-center border border-gray-700">
              <span className="text-[11px] font-extrabold text-yellow-400 tracking-wide uppercase">
                Click here ☁️
              </span>
              <span className="text-[10px] font-bold  text-gray-200">
                Use your current location
              </span>

              {/* Bottom Pointer Arrow */}
              <span className="absolute -bottom-1.5 right-3 sm:right-1/2 sm:translate-x-1/2 border-x-6 border-x-transparent border-t-6 border-t-gray-900"></span>
            </div>
          )}
        </div>

        {/* --- AUTOCOMPLETE DROPDOWN --- */}
        {suggestions.length > 0 && (
          <ul
            className={`absolute top-full left-0 right-0 sm:w-full mt-1 rounded-lg shadow-xl max-h-48 sm:max-h-52 overflow-y-auto z-50 divide-y ${
              isDark
                ? "bg-slate-700 border border-slate-600 divide-slate-600"
                : "bg-white border border-gray-300 divide-gray-100"
            }`}
          >
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectCity(item)}
                className={`p-2 sm:p-2.5 cursor-pointer flex justify-between items-center transition-colors gap-1 ${
                  isDark
                    ? "hover:bg-slate-600 text-gray-200"
                    : "hover:bg-blue-50 text-gray-800"
                }`}
              >
                <span
                  className={`font-semibold text-xs sm:text-sm ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`text-xs ${
                    isDark ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.region ? `${item.region}, ` : ""}
                  {item.country}
                </span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
};

export default Header;
