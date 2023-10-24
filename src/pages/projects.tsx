import Link from "next/link";
import Image from "next/image";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  const topProjects = ProjectsData.slice(0, 2); // First two projects
  const bottomProjects = ProjectsData.slice(2, 4); // Next two projects

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-evenly lg:justify-center mt-12 lg:mt-24 md:mb-10">
        <div className="flex flex-col md:items-center">
          {topProjects.map((project, index) => (
            <div
              key={project.name}
              className="h-[26rem] border-b-[1px] hover:border-none border-zinc-300 last:border-none mx-10 pt-4"
            >
              <ProjectCard
                name={project.name}
                url={project.url}
                description={project.description}
                image={project.image}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:items-center mt-10 md:mt-0">
          {bottomProjects.map((project, index) => (
            <div
              key={project.name}
              className="h-[26rem] border-b-[1px] hover:border-none border-zinc-300 last:border-none mx-10 pt-4"
            >
              <ProjectCard
                name={project.name}
                url={project.url}
                description={project.description}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
