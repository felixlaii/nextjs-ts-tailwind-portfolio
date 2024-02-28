import React, { useState, useEffect } from "react";
import Skills from "./expertise";
import Hero from "@/components/Hero";
import Contact from "./contact";
import About from "./about";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./projectsection";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <div
        className={` w-full z-1 
          ${isDarkMode ? "bg-dark text-white" : "bg-brand-light text-black"}
          `}
      >
        <div data-aos="fade-down">
          <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div data-aos="fade-left">
          <section id="about">
            <About isDarkMode={isDarkMode} />
          </section>
        </div>
        <div data-aos="fade-right">
          <section id="expertise">
            <Skills isDarkMode={isDarkMode} />
          </section>
        </div>
        <div data-aos="fade-down">
          <section id="experience">
            <ProjectSection isDarkMode={isDarkMode} />
          </section>
        </div>
        <div data-aos="fade-up">
          <section id="contact">
            <Contact isDarkMode={isDarkMode} />
          </section>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
