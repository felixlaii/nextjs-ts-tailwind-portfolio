import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello World</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default MyComponent;
