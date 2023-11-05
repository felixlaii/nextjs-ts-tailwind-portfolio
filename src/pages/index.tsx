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
    // Save the dark mode state to local storage or a state management solution if needed
  };
  const location = useRouter();

  const navigationLinks: Array<NavigationLink> = [
    // { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    {
      name: "PROJECTS",
      href: "#projects",
    },
  ];

  return (
    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <div
        className={`relative ${
          isDarkMode ? "bg-dark text-white" : "bg-light text-black"
        }`}
      >
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          logo={logo.src}
          navigationLinks={navigationLinks}
          currentActiveLocation={location.pathname}
          textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-400"
          linkClassName="flex bg-left-bottom lg:text-md"
          logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 ml-2 mt-2 mr-1"
          hoverClassName={clsx(
            "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          )}
          activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
        />
        <div>
        <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div>
          <section id="skills">
            <Skills isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </section>
        </div>
        <div>
          <section id="projects">
            <Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </section>
        </div>
        <div>
          <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
