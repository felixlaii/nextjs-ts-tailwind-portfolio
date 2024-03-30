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
      className={`border-double border-4 border-brand-darkMode hover:border-brand-darkMode flex flex-col justify-center shadow-3xl pt-8 pl-4 pr-4 pb-8 lg:pb-6 lg:pl-10 lg:pr-10 cursor-pointer dark:border-double dark:border-4 dark:border-brand-darkMode dark:hover:border-brand-darkMode rounded-md h-[8.5rem] w-[calc(99%-1rem)] sm:w-[calc(90%-1rem)] md:w-[calc(100%)] md:h-[18rem] lg:w-[calc(80%-1rem)] lg:h-[16rem] xl:w-[calc(85%-1rem)] xl:h-[17rem] md:hover:scale-110 lg:hover:scale-110 xl:hover:scale-110
 ${
   isHovered ? "" : ""
 } bg-brand-lightMode hover:bg-brand-base dark:bg-brand-base dark:hover:bg-brand-cardbg`}
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
            className="rounded-sm object-center w-[25rem] sm:w-[15rem] md:w-[30rem] lg:w-[15rem]"
            width={300}
            height={300}
            src={image}
            alt="project logo"
          />
        </div>
        <div className="flex flex-column items-center ml-4 w-86 lg:w-3/4">
          <div className="grid grid-cols-1 gap-1 lg:gap-5 content-around text-center ">
            <div>
              <p
                className={`font-bold text-[0.4rem] sm:text-[0.5rem] sm:tracking-none md:text-[1rem] lg:text-[0.9rem] tracking-wide lg:tracking-widest ${
                  isHovered
                    ? "text-brand-darkMode dark:text-brand-darkest"
                    : "text-brand-darkMode dark:text-brand-darkMode dark:text-brand-darkMode"
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
                  className="lg:w-4 lg:h-5 w-2 h-1 md:w-5 md:h-4 lg:mb-2"
                />
              ))}
            </div>

            <div>
              <p
                className={`text-[0.3rem] sm:text-[0.4rem] md:text-[0.7rem] lg:text-md font-extralight ${
                  isHovered
                    ? "text-brand-darkMode dark:text-brand-darkest"
                    : "text-brand-darkMode dark:text-brand-darkMode dark:text-brand-darkMode"
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
