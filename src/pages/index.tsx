import React, { useState, useEffect } from "react";
import Skills from "./expertise";
import Projects from "./projects";
import Hero from "@/components/Hero";
import Contact from "./contact";
import About from "./about";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the parallax effect based on your needs
      const parallaxValue = scrollY * 0.1;

      // Apply the parallax effect to specific elements
      document.getElementById(
        "about"
      )!.style.transform = `translateY(-${parallaxValue}px)`;

      document.getElementById(
        "expertise"
      )!.style.transform = `translateY(-${parallaxValue}px)`;

      document.getElementById(
        "experience"
      )!.style.transform = `translateY(-${parallaxValue}px)`;

      // document.getElementById(
      //   "contact"
      // )!.style.transform = `translateY(-${parallaxValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            <Projects isDarkMode={isDarkMode} />
          </section>
        </div>
        <div data-aos="fade-up">
          <section className="mb-[10rem]" id="contact">
            <Contact isDarkMode={isDarkMode} />
          </section>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Home;
