import React from 'react';
import { DarkModeProviderProps } from '@/contexts/DarkModeContext';

const DarkModeToggle: React.FC<DarkModeProviderProps> = ({ initialIsDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {initialIsDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
