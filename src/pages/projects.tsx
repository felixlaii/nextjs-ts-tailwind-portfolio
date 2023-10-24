import Link from "next/link";
import Image from "next/image";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  const topProjects = ProjectsData.slice(0, 3); // First three projects
  const bottomProject = ProjectsData[3]; // The fourth project

  return (
    <div className="flex flex-col items-center bg-brand-light">
      <div>
        <h2 className="text-[4.5rem] pb-5">Projects</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
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
      <div className="h-[26rem] border-b-[1px] hover:border-none border-zinc-300 last:border-none mx-10 pt-4">
        <ProjectCard
          name={bottomProject.name}
          url={bottomProject.url}
          description={bottomProject.description}
          image={bottomProject.image}
        />
      </div>
    </div>
  );
};

export default Projects;
