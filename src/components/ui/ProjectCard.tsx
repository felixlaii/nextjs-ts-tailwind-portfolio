import React, { useState, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  name,
  description,
  image,
  technology,
  // href,
  id,
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

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        isLargeScreen
          ? "md:w-[45rem] lg:h-[25rem] lg:w-[25rem] md:px-2 lg:px-8 pt-4 md:pt-0"
          : "lg:w-64 md:px-3 lg:px-8 pt-4 md:pt-0"
      } h-70 rounded-lg md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 transition duration-300 shadow-xl transform ${
        isHovered ? "shadow-xl bg-brand-light scale-105" : ""
      } ${
        isLargeScreen
          ? "sm:flex md:flex lg:flex xl:flex"
          : "sm:align-middle sm:items-center sm:w-[38rem] lg:items-center lg:justify-center md:flex-row md:justify-between sm:justify-between w-1/2 h-1/2"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ minHeight: "280px" }}
    >
      {isLargeScreen ? (
        isHovered ? (
          // Content for lg and xl screens when hovered
          <div className="flex flex-col items-center justify-center  text-white font-light mb-2">
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
          <div className="flex flex-col items-center justify-around  w-full h-full">
            <div className="">
              <h2 className="text-sm lg:text-xl tracking-widest text-brand-light font-semibold mb-4">
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
        <div className="flex lg:flex-col sm:align-middle sm:items-center sm:w-[38rem] lg:items-center lg:justify-center md:flex-row md:justify-between sm:justify-between w-1/2 h-1/2">
          <div className="lg:flex lg:flex-col lg:align-middle lg:items-center lg:mt-4 lg:w-[9rem] lg:h-[9rem] w-full md:w-[10rem] md:h-[10rem] sm:w-[9rem] sm:h-[7.5rem] xl:w-48">
            <Image
              className="rounded-lg ml-[1rem]"
              width={270}
              height={170}
              src={image}
              alt="project logo"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-56 xl:w-1/2 p-4">
            <h2 className="text-sm sm:text-[1.3rem] lg:text-sm tracking-widest text-brand-light font-semibold mb-4">
              {name}
            </h2>
            <div className="flex lg:justify-center lg:items-center sm:justify-center md:justify-around md:items-center lg:space-x-2 mt-2">
              {technology.map((iconUrl, index) => (
                <Image
                  height={40}
                  width={40}
                  key={index}
                  src={iconUrl}
                  alt={`tech-icon-${index}`}
                  className="w-5 h-5 mx-2"
                />
              ))}
            </div>
            <p className="text-sm sm:text-[1rem] lg:text-sm text-white font-extralight mt-4 mb-6">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
