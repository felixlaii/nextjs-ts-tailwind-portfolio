import { ProjectCardProps } from "@/types/component-types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  name,
  description,
  image,
}) => {
  const [iconType, setIconType] = useState<string>();

  return (
    <div
      className="flex flex-col justify-center items-center md:max-w-52 lg:w-80 md:px-3 lg:px-8 pt-4 md:pt-0 h-full rounded-lg md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 hover:shadow-xl hover:scale-105 hover:transition hover:duration-300"
      onMouseEnter={() => setIconType("hoverIcon")}
      onMouseLeave={() => setIconType("icon")}
    >
      <div className="w-200 h-90">
        <Image
          className="rounded-lg object-contain h-29"
          width={200}
          height={90}
          src={image}
          alt="project logo"
        />
      </div>

      <h2 className="text-xl lg:text-2xl text-white font-normal">{name}</h2>

      <p className="text-md lg:text-lg text-white font-extralight">
        {description}
      </p>

      {/* Add your button here */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        {url}
      </button> */}
      <a href={url} target="_blank" rel="noopener noreferrer" >take a look</a>
    </div>
  );
};

export default ProjectCard;
