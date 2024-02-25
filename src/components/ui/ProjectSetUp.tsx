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
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <motion.div
      className={`flex flex-col justify-center shadow-2xl pt-8 pb-6 pl-10 pr-10 cursor-pointer ${
        isDarkMode ? "bg-brand-light bg-cover" : "bg-brand-base bg-cover"
      } box-border rounded-sm h-[13rem] w-[23.7rem] md:w-[40rem] md:h-[25rem] lg:w-[43rem] lg:h-[20rem] xl:w-[44rem] xl:h-[21rem] md:hover:scale-110 lg:hover:scale-110 xl:hover:scale-110`}
      data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
      whileHover={{
        scale: [0, 1.1], // Initial scale 1 for small screens, 1.1 for md, lg, and xl screens
        transition: { type: "spring", stiffness: 500 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? (isDarkMode ? "#84a0b0" : "#84a0b0") : "",
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
          <div className="">
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
            className={`text-xs lg:text-lg font-extralight ${
              isDarkMode
                ? isHovered
                  ? "text-brand-darkest"
                  : "text-zinc-300"
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
