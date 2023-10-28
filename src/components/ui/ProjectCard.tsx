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
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "280px" }} // Adjust the minimum height as needed
    >
      {isHovered ? (
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
          <a className="border px-7 rounded-md text-xs" href={url} target="_blank" rel="noopener noreferrer">
            view
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-sm lg:text-md tracking-widest text-brand-light font-semibold mb-4">{name}</h2>
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
      )}
    </div>
  );
};

export default ProjectCard;
