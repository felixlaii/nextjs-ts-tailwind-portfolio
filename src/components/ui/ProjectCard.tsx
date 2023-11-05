import React, { useState } from "react";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  name,
  description,
  image,
  technology,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center md:max-w-45 lg:w-64 md:px-3 lg:px-8 pt-4 md:pt-0 h-70 rounded-lg md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 transition duration-300 shadow-xl transform ${
        isHovered ? "shadow-xl bg-brand-light scale-105" : ""
      } ${
        // Apply hover styles only for screens larger than or equal to 'sm' (small) size
        'sm:hidden md:flex lg:flex xl:flex'
      }`}

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "280px" }} // Adjust the minimum height as needed
    >

       <div className="flex flex-col sm:justify-center sm:align-middle sm:items-center sm:w-[38rem] md:flex-row w-1/2 h-1/2">
        <div className="w-full sm:w-20 sm:h-20 md:w-48 lg:w-40 xl:w-48">
          <Image
            className="lg:h-[30rem] lg:w-[30rem] rounded-lg object-center"
            width={270}
            height={170}
            src={image}
            alt="project logo"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-56 xl:w-1/2 p-4">
          <h2 className="text-sm sm:text-[1.3rem] lg:text-md tracking-widest text-brand-light font-semibold mb-4">
            {name}
          </h2>
          <div className="flex justify-center items-center space-x-2 mt-2">
            {technology.map((iconUrl, index) => (
              <Image
                height={40}
                width={40}
                key={index}
                src={iconUrl}
                alt={`tech-icon-${index}`}
                className="w-5 h-5"
              />
            ))}
          </div>
          <p className="text-sm sm:text-[1rem] lg:text-md text-white font-extralight mt-4 mb-6">
            {description}
          </p>
          <a
            className="border px-7 rounded-md text-xs"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            view
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;