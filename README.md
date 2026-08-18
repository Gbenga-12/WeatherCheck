# ⛅ Weather App

A modern, responsive weather application built with **React**, **Vite**, and **Tailwind CSS**. Get real-time weather forecasts with an intuitive interface that adapts perfectly to any device.

## ✨ Features

- 🌡️ **Real-time Weather Data** - Current conditions, temperature, and forecasts
- 📍 **Location Search** - Search by city name with autocomplete suggestions
- 🎯 **Geolocation Support** - One-click weather for your current location
- 📱 **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- 🌓 **Dark Mode / Light Mode** - Easy-on-the-eyes toggle in the top-right corner
- ⏰ **Hourly Forecast** - Scroll through hourly weather predictions
- 🎨 **Beautiful UI** - Vibrant gradient backgrounds with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the repository**

   ```bash
   cd Weatherapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add your WeatherAPI key:
     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
   - Get a free API key at [WeatherAPI.com](https://www.weatherapi.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

   - Open [http://localhost:5174](http://localhost:5174) in your browser

## 📁 Project Structure

```
src/
├── page/
│   └── Card.jsx              # Main weather card container with theme toggle
├── components/
│   ├── Header.jsx            # Search input with autocomplete & geolocation
│   ├── Weat.jsx              # Weather display (location, temp, conditions)
│   ├── Lil.jsx               # Hourly forecast carousel
│   └── Api.js                # API configuration & key management
├── context/
│   └── ThemeContext.jsx       # Global dark/light mode state management
├── App.jsx                   # Root component with background logic
├── main.jsx                  # App entry point with ThemeProvider
├── App.css                   # Component-specific styles
├── index.css                 # Global styles & animations
└── assets/                   # Images and static files
```

## 🛠️ Available Scripts

### Development

```bash
npm run dev          # Start development server with hot module reloading
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint to check code quality
```

## 🎨 Customization

### Theme Colors

Edit [tailwind.config.js](tailwind.config.js) to customize:

- Light mode gradient background
- Dark mode colors
- Accent colors
- Breakpoints for responsive design

### API Configuration

See [src/components/Api.js](src/components/Api.js) for:

- Weather API endpoint
- Request parameters
- Security settings

## 📱 Responsive Breakpoints

The app is optimized for:

- **Mobile**: Up to 479px
- **Small Tablet**: 480px - 767px
- **Tablet**: 768px - 975px
- **Laptop**: 976px - 1439px
- **Desktop**: 1440px and above

## 🌓 Theme Toggle

Click the **sun/moon icon** in the top-right corner to switch between:

- **Light Mode**: Vibrant indigo-purple-pink gradient with a background image
- **Dark Mode**: Sleek slate gradient for comfortable nighttime viewing

## 🔐 Security

- API keys are stored in `.env.local` (never committed to version control)
- HTTPS is used for all API requests
- `.gitignore` excludes environment files from the repository

## 🧪 Testing

1. **Search by city**: Type a city name and select from suggestions
2. **Use geolocation**: Click the location icon for instant weather
3. **View forecast**: Scroll through hourly predictions
4. **Switch themes**: Toggle dark/light mode anytime
5. **Test responsiveness**: Resize your browser or test on mobile devices

## 📚 Technologies Used

- **React** - UI library for building interactive components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **WeatherAPI.com** - Weather data provider
- **React Icons** - Icon library (sun, moon, location, search)

## 🐛 Troubleshooting

**Tailwind styles not applying?**

- Run `npm run build` to verify the build
- Clear browser cache and hard refresh (Ctrl+Shift+R)

**Weather data not loading?**

- Check that `VITE_WEATHER_API_KEY` is set in `.env.local`
- Verify your API key is valid at [WeatherAPI.com](https://www.weatherapi.com/)
- Check browser console for error messages

**Geolocation not working?**

- Ensure your browser has permission to access location
- Use HTTPS or localhost for geolocation to work

## 📄 Environment Variables

```env
VITE_WEATHER_API_KEY    # Your WeatherAPI.com API key
```

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to improve the app!

---

**Happy weather checking!** ⛅🌤️🌧️
