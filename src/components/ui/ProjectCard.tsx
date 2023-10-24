import { ProjectCardProps } from "@/types/component-types";
import Link from "next/link";
import { useState } from "react";

const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    icon,
    hoverIcon,
    name,
    information,
}) => {
    const [iconType, setIconType] = useState<string>();

    return (
        <div></div>
    )
}

export default ProjectCard;