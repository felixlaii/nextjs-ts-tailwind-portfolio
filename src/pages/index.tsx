import React, { useState, useEffect, useRef } from "react";
import Expertise from "./expertise";
import Projects from "./projects";
import Hero from "@/components/Hero";
import Contact from "./contact";
import About from "./about";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleParallax from "@/components/ui/ParallaxEffect";
export const toPixels = (n: number) => `${Math.floor(n)}px`;
const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
    if (ref.current) {
      const { top } = ref.current?.getBoundingClientRect();
      const height = ref.current?.clientHeight;

      addEventListener("scroll", (ev) => {
        if (ref.current) {
          const calculatedTop = top + height * 0.3;
          let bottom = calculatedTop - window.scrollY;

          if (
            window.scrollY > calculatedTop &&
            window.scrollY < calculatedTop + height
          ) {
            ref.current.style.bottom = toPixels(bottom);
          } else if (window.scrollY < calculatedTop) {
            ref.current.style.bottom = "0";
          }
        }
      });
    }
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
        {/* <SimpleParallax> */}
        <div id="about" data-aos="fade-left">
          <section>
            <About isDarkMode={isDarkMode} />
          </section>
        </div>
        {/* </SimpleParallax> */}
        {/* <SimpleParallax> */}
        <div id="expertise" data-aos="fade-right">
          <section>
            <Expertise isDarkMode={isDarkMode} />
          </section>
        </div>
        {/* </SimpleParallax> */}
        {/* <SimpleParallax> */}
        <div id="projects" data-aos="fade-down">
          <section>
            <Projects isDarkMode={isDarkMode} />
          </section>
        </div>
        {/* </SimpleParallax> */}
        {/* <SimpleParallax> */}
        <div className="relative" id="contact" data-aos="fade-up">
          <section>
            <Contact isDarkMode={isDarkMode} />
          </section>
        </div>
        {/* </SimpleParallax> */}
      </div>
    </DarkModeProvider>
  );
};

export default Home;
