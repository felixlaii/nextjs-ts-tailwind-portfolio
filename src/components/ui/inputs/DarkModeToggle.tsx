import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default MyComponent;
