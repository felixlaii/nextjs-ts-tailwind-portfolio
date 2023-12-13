import React, { useState, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
  technology,
  isDarkMode,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const router = useRouter();

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
      {isLargeScreen ? (
        isHovered ? (
          // Content for lg and xl screens when hovered
          <div className="flex flex-col items-center justify-center text-white font-light mb-2">
            <div className="flex items-center space-x-2 mt-10">
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
        ) : (
          // Content for lg and xl screens when not hovered
          <div
            className={`flex flex-col shadow-2xl h-full items-center justify-around w-full ${
              isDarkMode ? "bg-brand-light bg-cover" : "bg-brand-base bg-cover"
            } box-border`}
          >
            <div>
              <h2 className="text-sm lg:text-2xl lg:mb-14 tracking-widest text-brand-dark font-semibold mb-4">
                {name}
              </h2>
            </div>
            <div className="w-150 h-90">
              <Image
                className="rounded-lg object-center"
                width={270}
                height={170}
                src={image}
                alt="project logo"
              />
            </div>
          </div>
        )
      ) : (
        // Content for sm and md screens
        <div
          className={`flex lg:flex-col h-full w-full px-10 sm:align-middle sm:h-[15rem] sm:w-full md:align-middle md:h-[16rem] align-middle items-center lg:items-center lg:justify-center md:flex-row md:justify-between justify-between ${
            isDarkMode ? "bg-brand-light bg-cover" : "bg-brand-base bg-cover"
          } box-border}`}
        >
          <div className="lg:flex lg:flex-col lg:align-middle lg:items-center lg:mt-4 lg:w-[9rem] lg:h-[9rem] md:w-[10rem] md:h-[10rem] w-[9rem] h-[7.5rem] xl:w-48">
            <Image
              className="w-23 sm:w-40 md:w-60 lg:w-70 xl:w-80 rounded-lg ml-[1rem]"
              width={270}
              height={170}
              src={image}
              alt="project logo"
            />
          </div>
          <div className="flex flex-col items-center w-1/2 md:w-[15rem] lg:w-56 xl:w-1/2 p-1">
            <h2 className="text-sm text-[1.3rem] md:text-lg lg:text-sm tracking-widest text-brand-light font-semibold mb-4">
              {name}
            </h2>
            <div className="flex sm:w-[10rem] w-1/3 lg:justify-center lg:items-center justify-center md:justify-around md:items-center lg:space-x-2 mt-2">
              {technology.map((iconUrl, index) => (
                <Image
                  height={40}
                  width={40}
                  key={index}
                  src={iconUrl}
                  alt={`tech-icon-${index}`}
                  className="w-3 h-4 mx-1"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
