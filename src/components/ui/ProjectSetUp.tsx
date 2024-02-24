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
      } box-border rounded-sm  sm:h-[20rem] sm:w-[35rem] md:w-[40rem] md:h[25rem] lg:w-[43rem] lg:h-[20rem] xl:w-[44rem] xl:h-[21rem]`}
      data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
      whileHover={{ scale: 1.05 }}
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
                height={60}
                width={60}
                key={index}
                src={iconUrl}
                alt={`tech-icon-${index}`}
                className="w-5 h-5 mb-10"
              />
            ))}
          </div>
          <div className="">
            <Image
              className="rounded-lg object-center"
              width={200}
              height={200}
              src={image}
              alt="project logo"
            />
          </div>
        </div>
        <div className="flex items-center ml-20 w-1/2">
          <p
            className={`text-sm lg:text-lg font-extralight ${
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
