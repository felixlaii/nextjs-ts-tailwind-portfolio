import React, { useState, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSetUp: React.FC<ProjectCardProps> = ({
  description,
  image,
  technology,
  index,
  name,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedHoverState = localStorage.getItem(`hoverState_${index}`);
      setIsHovered(storedHoverState === "true");
    }
  }, [index]);

  useEffect(() => {
    localStorage.setItem(`hoverState_${index}`, isHovered.toString());
  }, [isHovered, index]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <motion.div
      className={`border-double border-4 border-brand-darkMode hover:border-brand-light flex flex-col justify-center shadow-3xl pt-8 lg:pb-6 pb-8 lg:pl-10 lg:pr-10 pl-7 pr-7 cursor-pointer dark:border-double dark:border-4 dark:border-brand-light dark:hover:border-brand-darkMode rounded-md h-[12rem] w-[20rem] sm:w-[25rem] md:w-[47rem] md:h-[18rem] lg:w-[43rem] lg:h-[20rem] xl:w-[44rem] xl:h-[21rem] md:hover:scale-110 lg:hover:scale-110 xl:hover:scale-110
 ${
   isHovered ? "" : ""
 } bg-brand-cardbg hover:bg-brand-base dark:bg-brand-base dark:hover:bg-brand-cardbg`}
      data-aos={
        isHovered ? null : index % 2 === 0 ? "slide-left" : "slide-right"
      }
      whileHover={{
        scale: isHovered ? 1.1 : 1,
        transition: {
          type: "cubic-bezier",
          ease: [0.55, 0.055, 0.675, 0.19],
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center align-middle">
        <div data-aos="zoom-in">
          <Image
            className="rounded-sm object-center sm:w-[25rem] w-100"
            width={300}
            height={300}
            src={image}
            alt="project logo"
          />
        </div>
        <div className="flex flex-column items-center ml-14 w-86 lg:w-3/4">
          <div className="grid grid-cols-1 gap-1 lg:gap-5 content-around text-center ">
            <div>
              <p
                className={`font-bold text-[0.7rem] sm:text-[1rem] md:text-[1.7rem] lg:text-[1.5rem] tracking-wide lg:tracking-widest ${
                  isHovered
                    ? "text-brand-light dark:text-brand-darkest"
                    : "text-brand-darkMode dark:text-brand-light dark:text-brand-darkMode"
                }`}
              >
                {name}
              </p>
            </div>
            <div className="flex flex-row justify-evenly">
              {technology.map((iconUrl, index) => (
                <Image
                  height={80}
                  width={80}
                  key={index}
                  src={iconUrl}
                  alt={`tech-icon-${index}`}
                  className="lg:w-6 lg:h-6 w-5 h-4 md:w-8 md:h-8 lg:mb-4 mb-1 px-1"
                />
              ))}
            </div>

            <div className="">
              <p
                className={`text-[0.5rem] sm:text-[0.7rem] md:text-[1rem] lg:text-lg font-extralight ${
                  isHovered
                    ? "text-brand-light dark:text-brand-darkest"
                    : "text-brand-darkMode dark:text-brand-light dark:text-brand-darkMode"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectSetUp;
