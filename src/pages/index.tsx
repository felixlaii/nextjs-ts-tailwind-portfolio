import React, { useState } from "react";
import Skills from "./skills";
import About from "./about";
import Projects from "./projects";
import Hero from "@/components/Hero";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import Header from "@/components/layout/project-layout/Header"; // Import the Header component
import logo from "../../public/images/blue-logo-1.png";
import clsx from "clsx";
import { NavigationLink } from "@/types/component-types";
import Footer from "@/components/layout/project-layout/Footer";
import { useRouter } from "next/router";

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
        ${isDarkMode ? "bg-light text-white" : "bg-dark text-black"}
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
        <div></div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
