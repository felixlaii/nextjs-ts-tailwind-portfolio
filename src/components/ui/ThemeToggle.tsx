import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center ml-4 cursor-pointer">
      <label className="flex items-center cursor-pointer">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            className="hidden"
            onClick={() => setDarkMode(!darkMode)}
          />
          <div className="toggle-track w-8 h-4 bg-gray-400 rounded-full shadow-inner relative">
            <div
              className={`toggle-thumb absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
          <p
            className={`font-custom tracking-widest ml-2 ${
              darkMode ? "text-brand-lighter" : "text-brand-light"
            }`}
          >
            {darkMode ? "LHT" : "DRK"}
          </p>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
