import React, { useState, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSetUp: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  technology,
  isDarkMode,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", updateWindowSize);

    updateWindowSize();

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  const handleMouseEnter = () => {
    if (isLargeScreen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center cursor-pointer ${
        isLargeScreen
          ? "md:w-[45rem] lg:h-[25rem] lg:w-[25rem] md:px-2 lg:mx-8 pt-4 md:pt-0"
          : "lg:w-64 md:px-3 lg:px-8 pt-4 md:pt-0"
      } h-70 rounded-sm md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 transition duration-300 shadow-xl transform ${
        isHovered ? "shadow-xl bg-brand-lightest scale-105" : ""
      } ${
        isLargeScreen
          ? "flex md:flex lg:flex xl:flex"
          : "align-middle items-center w-[25rem] md:w-[35rem] lg:items-center lg:justify-center md:flex-row md:justify-between justify-between h-1/2 "
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ minHeight: "280px" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          {technology.map((iconUrl, index) => (
            <Image
              height={60}
              width={60}
              key={index}
              src={iconUrl}
              alt={`tech-icon-${index}`}
              className="w-5 h-5"
            />
          ))}
        </div>
        <p className="text-sm lg:text-md text-white font-extralight mt-10 mb-5">
          {description}
        </p>
      </div>
    </div>
  );
};
export default ProjectSetUp;
