import React from 'react';
import { DarkModeProviderProps } from '@/contexts/DarkModeContext';

const DarkModeToggle: React.FC<DarkModeProviderProps> = ({ initialIsDarkMode, toggleDarkMode }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="hidden" checked={initialIsDarkMode} onChange={toggleDarkMode} />
        <div className="toggle-track w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className={`toggle-thumb absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${initialIsDarkMode ? 'translate-x-full' : 'translate-x-0'}`}></div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
