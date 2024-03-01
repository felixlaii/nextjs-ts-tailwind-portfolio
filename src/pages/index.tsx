import React, { useState, useEffect } from "react";
import Skills from "./expertise";
import Hero from "@/components/Hero";
import Contact from "./contact";
import About from "./about";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./projectsection";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div
      className={` w-full z-1 
          ${isDarkMode ? "bg-dark text-white" : "bg-brand-light text-black"}
          `}
    >
      <div data-aos="fade-down">
        <Hero />
      </div>
      <div data-aos="fade-left">
        <section id="about">
          <About />
        </section>
      </div>
      <div data-aos="fade-right">
        <section id="expertise">
          <Skills />
        </section>
      </div>
      <div data-aos="fade-down">
        <section id="experience">
          <ProjectSection />
        </section>
      </div>
      <div data-aos="fade-up">
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
