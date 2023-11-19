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
    { name: "HOME", href: "#home" },

    { name: "EXPERTISE", href: "#expertise" },
    {
      name: "WORK",
      href: "#work",
    },
    { name: "CONTACT", href: "#contact" },

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
        <div>
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          logo={logo.src}
          navigationLinks={navigationLinks}
          currentActiveLocation={location.pathname}
          textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-white"
          linkClassName="flex bg-left-bottom lg:text-xl tracking-widest"
          logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 ml-2 mt-2 mr-1"
          hoverClassName={clsx(
            "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          )}
          activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
        />
        </div>
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
        <div>
          <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
