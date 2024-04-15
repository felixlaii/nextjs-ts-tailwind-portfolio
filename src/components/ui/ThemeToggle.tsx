import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      return savedMode === "dark";
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      if (savedMode === "dark") {
        setDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-10 h-5 flex items-center dark:bg-gray-900 bg-brand-lightish cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={13} />
      <div
        className="absolute bg-white dark:bg-brand-darkMode w-4 h-4 rounded-full shadow-md transform transition-transform ease-in duration-200"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={13} />
    </div>
  );
};

export default ThemeToggle;
