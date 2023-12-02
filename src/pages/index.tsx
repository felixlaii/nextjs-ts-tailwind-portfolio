import React, { useState } from "react";
import Skills from "./skills";
import Projects from "./projects";
import Hero from "@/components/Hero";
import Contact from "./contact";
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
        className={`absolute 
        ${isDarkMode ? "bg-dark text-white" : "bg-brand-light text-black"}
        `}
      >
        <div>
          <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <section id="expertise">
            <Skills isDarkMode={isDarkMode} />
          </section>
        </div>
        <div>
          <section id="work">
            <Projects isDarkMode={isDarkMode} />
          </section>
        </div>
        <div>
          <section className="mb-[10rem]" id="contact">
            <Contact isDarkMode={isDarkMode} />
          </section>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
