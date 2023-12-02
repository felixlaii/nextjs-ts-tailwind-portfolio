// DarkModeContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: ReactNode;
  initialIsDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  initialIsDarkMode,
  toggleDarkMode,
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const contextValue: DarkModeContextType = {
    isDarkMode,
    toggleDarkMode: handleToggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
