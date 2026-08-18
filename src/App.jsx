import Card from "./page/Card";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-[url('/bgraa.jpg')] bg-cover bg-center"
      } animate-slide-down min-h-screen flex flex-col items-center justify-center px-2 sm:px-4`}
    >
      <Card />
    </div>
  );
};

export default App;
