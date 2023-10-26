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
      className="flex flex-col justify-center items-center md:max-w-52 lg:w-80 md:px-3 lg:px-8 pt-4 md:pt-0 h-full rounded-lg md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 hover:shadow-xl hover:scale-105 hover:transition hover:duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-200 h-90">
      <h2 className="text-lg lg:text-xl text-white font-normal">{name}</h2>

        <Image
          className="rounded-lg object-contain h-29"
          width={200}
          height={90}
          src={image}
          alt="project logo"
        />
      </div>

      {isHovered && (
        <div className="text-white font-light mb-2">
       
          {technology.map((iconUrl, index) => (
            <Image
            height={40}
            width={40}
              key={index}
              src={iconUrl}
              alt={`tech-icon-${index}`}
              className="w-6 h-6 inline-block mx-1"
            />
          ))}
        </div>
      )}

      {isHovered ? null : (
        <>
          <p className="text-sm lg:text-md text-white font-extralight">
            {description}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            take a look
          </a>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
