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
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <motion.div
      className={` border-double border-4 border-brand-dark hover:border-brand-light flex flex-col justify-center shadow-3xl pt-8 pb-6 pl-10 pr-10 cursor-pointer dark:border-double dark:border-4 dark:border-brand-light dark:hover:border-brand-dark rounded-md h-[12rem] w-[23.3rem] md:w-[37rem] md:h-[18rem] lg:w-[43rem] lg:h-[20rem] xl:w-[44rem] xl:h-[21rem] md:hover:scale-110 lg:hover:scale-110 xl:hover:scale-110
      
 ${
   isHovered ? "" : ""
 } bg-brand-base hover:bg-brand-darkMode dark:bg-brand-lightish dark:hover:bg-brand-base`}
      data-aos={
        isHovered ? null : index % 2 === 0 ? "slide-left" : "slide-right"
      }
      whileHover={{
        scale: isHovered ? 1.1 : 1,
        transition: { type: "spring", stiffness: 200 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
                className="w-6 h-6 md:w-8 md:h-8 mb-4 px-1"
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
        <div className="flex flex-column  items-center ml-20 w-3/4">
          <div className=" grid grid-cols-1 gap-5 content-around text-center ">
            <div>
              <p
                className={`text-[0.9rem] md:text-[1.7rem] lg:text-[1.5rem] font-extralight ${
                  isHovered
                    ? "text-brand-light"
                    : "text-brand-dark dark:text-brand-light dark:text-brand-dark"
                }`}
              >
                {name}
              </p>
            </div>

            <div>
              <p
                className={`text-[0.6rem] md:text-[1rem] lg:text-lg font-extralight ${
                  isHovered
                    ? "text-brand-light"
                    : "text-brand-dark dark:text-brand-light dark:text-brand-dark"
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
