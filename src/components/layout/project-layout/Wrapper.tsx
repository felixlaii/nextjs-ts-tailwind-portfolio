import React, { useState, useEffect } from "react";
import { PropsWithChildren } from "react";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

export interface WrapperDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<WrapperDarkProps>> = ({
  children,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
<div className={`min-h-screen h-full overflow-y-hidden overflow-x-hidden ${isDarkMode ? "dark-mode" : ""}`}>

        {children}
      </div>
    </DarkModeProvider>
  );
};
