import { ProjectCardProps } from "@/types/component-types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = ({
    url,
    // icon,
    // hoverIcon,
    name,
    description,
    image,
}) => {
    const [iconType, setIconType] = useState<string>();

    return (
        <Link
        href={url}
        className="flex flex-col md:max-w-52 lg:w-80 md:px-3 lg:px-8 pt-4 md:pt-0 h-full rounded-lg md:justify-evenly lg:justify-start text-center lg:mx-auto md:gap-y-4 hover:shadow-xl hover:scale-105 hover:transition hover:duration-300"
        onMouseEnter={() => setIconType("hoverIcon")}
        onMouseLeave={() => setIconType("icon")}
      >
        {/* <div className="mx-auto pt-4 transition">
          {iconType === "icon" ? icon : hoverIcon}
        </div> */}
        <div>
            <Image width={250} height={250} src={image} alt="project logo"/>
        </div>
  
        <h2 className="text-xl lg:text-2xl font-normal">{name}</h2>
  
        <p className="text-md lg:text-l text-zinc-400 font-extralight">
          {description}
        </p>
      </Link>
    )
}

export default ProjectCard;