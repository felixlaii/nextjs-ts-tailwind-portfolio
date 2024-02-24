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
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
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
        <div className="ml-4">
          {" "}
          {/* Adding margin to create space */}
          <p className="text-sm lg:text-md text-white font-extralight mt-8 mb-5">
            {/* Adjusting margin-top (mt-8) */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProjectSetUp;
