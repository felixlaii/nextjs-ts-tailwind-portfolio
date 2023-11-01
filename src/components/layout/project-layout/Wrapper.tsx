import React, { useState, useEffect } from "react";
import { PropsWithChildren } from "react";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Save the dark mode state to local storage or a state management solution if needed
  };

  useEffect(() => {
    if (isDarkMode) {
      // Apply dark mode styles
      document.body.classList.add("bg-dark", "text-dark");
    } else {
      // Remove dark mode styles
      document.body.classList.remove("bg-dark", "text-dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen overflow-hidden overflow-x-hidden ${
        isDarkMode
          ? "bg-brand-bgdark text-brand-textDark"
          : "bg-brand-light text-black"
      }`}
    >
      {/* Dark mode toggle button */}
      {/* <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}

      {children}
    </div>
  );
};
