import React, { useState } from "react";
import Skills from "./skills";
import Projects from "./projects";
import Hero from "@/components/Hero";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <div
        className={`relative 
        ${isDarkMode ? "bg-dark text-white" : "bg-brand-light text-black"}
        `}
      >
        <div>
          <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <section id="expertise">
            <Skills isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </section>
        </div>
        <div>
          <section id="work">
            <Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </section>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
