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
  isDarkMode,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <motion.div
      className={`flex flex-col justify-center shadow-3xl pt-8 pb-6 pl-10 pr-10 cursor-pointer ${
        isDarkMode
          ? "bg-brand-light bg-cover border-double border-4 border-brand-lightish"
          : "bg-brand-darkMode bg-cover border-double border-4 border-brand-dark"
      }  border-double border-4 border-brand-dark hover:border-brand-light rounded-md h-[13rem] w-[23.7rem] md:w-[40rem] md:h-[25rem] lg:w-[43rem] lg:h-[20rem] xl:w-[44rem] xl:h-[21rem] md:hover:scale-110 lg:hover:scale-110 xl:hover:scale-110`}
      data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
      whileHover={{
        scale: isHovered ? 1.1 : 1,
        transition: { type: "spring", stiffness: 500 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? (isDarkMode ? "#6A98B0" : "#81BBDA") : "",
      }}
    >
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-around">
            {technology.map((iconUrl, index) => (
              <Image
                height={80}
                width={80}
                key={index}
                src={iconUrl}
                alt={`tech-icon-${index}`}
                className="w-7 h-7 mb-4 px-1"
              />
            ))}
          </div>
          <div data-aos="zoom-in">
            <Image
              className="rounded-lg object-center"
              width={150}
              height={150}
              src={image}
              alt="project logo"
            />
          </div>
        </div>
        <div className="flex items-center ml-20 w-1/2">
          <p
            className={`text-[0.6rem] lg:text-lg font-extralight ${
              isDarkMode
                ? isHovered
                  ? "text-brand-darkest"
                  : "text-brand-lightish"
                : isHovered
                ? "text-zinc-800"
                : "text-brand-dark"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectSetUp;
