import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DarkModeContextProps } from '@/types/component-types';
import { DarkModeContextType } from '@/types/component-types';

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeContextProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };
  
  export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
      throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
  };