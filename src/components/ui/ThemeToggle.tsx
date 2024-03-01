import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

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
    // <div className="flex items-center ml-4 cursor-pointer">
    //   <label className="flex items-center cursor-pointer">
    //     <div className="relative flex items-center">
    //       <input
    //         type="checkbox"
    //         className="hidden"
    //         onClick={() => setDarkMode(!darkMode)}
    //       />
    //       <div className="toggle-track w-8 h-4 bg-gray-400 rounded-full shadow-inner relative">
    //         <div
    //           className={`toggle-thumb absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
    //             darkMode ? "translate-x-full" : "translate-x-0"
    //           }`}
    //         ></div>
    //       </div>
    //       <p
    //         className={`font-custom tracking-widest ml-2 ${
    //           darkMode ? "text-brand-lighter" : "text-brand-light"
    //         }`}
    //       >
    //         {darkMode ? "LHT" : "DRK"}
    //       </p>
    //     </div>
    //   </label>
    // </div>
    <div
      className="relative w-10 h-5 flex items-center dark:bg-gray-900 bg-brand-lightish cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={13} />
      <div
        className="absolute bg-white dark:bg-brand-light w-4 h-4 rounded-full shadow-md transform transition-transform ease-in duration-200"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={13} />
    </div>
  );
};

export default ThemeToggle;
