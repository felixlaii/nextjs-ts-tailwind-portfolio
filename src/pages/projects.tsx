import Link from "next/link";
import Image from "next/image"
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
    return (
        <div>
            {/* <ul>
                {ProjectsData.map((project, index) => (
                    <li key={project.image}>
                        <div>
                            <Image width={100} height={100} src={project.image} alt="projects" />
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul> */}
      <ul className="flex flex-col md:flex-row md:justify-evenly lg:justify-center md: mt-12 lg:mt-24 md:mb-10">
  {ProjectsData.map((project, index) => (
    <li             className="h-[26rem] border-b-[1px] hover:border-none border-zinc-300 last:border-none md:border-none mx-10 pt-4"
    key={project.name} className="h-[26rem] border-b-[1px] hover:border-none border-zinc-300 last:border-none md:border-none mx-10 pt-4">
      <ProjectCard
        name={project.name}
        url={project.url}
        // icon={project.icon}
        // hoverIcon={project.hoverIcon}
        description={project.description}
        image={project.image}
      />
    </li>
  ))}
</ul>
        </div>
    )
}

export default Projects;