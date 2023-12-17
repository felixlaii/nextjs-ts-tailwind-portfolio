import { useEffect, useRef, useState } from "react";
import Skills from "./expertise";
import Projects from "./projects";
import Hero from "@/components/Hero";
import Contact from "./contact";
import About from "./about";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
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
