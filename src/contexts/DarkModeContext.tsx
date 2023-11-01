import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: ReactNode;
  initialIsDarkMode: boolean; // Rename isDarkMode to initialIsDarkMode to avoid conflicts
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ initialIsDarkMode, toggleDarkMode, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode); // Initialize state with initialIsDarkMode

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const contextValue: DarkModeContextType = {
    isDarkMode,
    toggleDarkMode: handleToggleDarkMode, // Use handleToggleDarkMode as the toggleDarkMode function
  };

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};
