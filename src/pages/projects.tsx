import React, { useState } from "react";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import Expertise from "./expertise";
import { useRouter } from "next/router";

interface ProjectsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  const filteredProjects =
    selectedCategory === "all"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === selectedCategory);

      const handleProjectClick = (projectId: string) => {
        console.log(`Clicked project with ID: ${projectId}`);
        
        router.push({
          pathname: "/work-page",
          query: { projectId: projectId },
        });
      };
      

  return (
    <main
      className={`flex flex-col items-center font-custom ${
        isDarkMode ? "bg-brand-light text-white " : "bg-brand-base text-black"
      } pb-10`}
    >
      <div>
        <h2 className="sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5">Explore My Work ...</h2>
        <div className="flex justify-center items-center align-middle mb-4">
          <p className="pr-4">Filter:</p>
          <button
            className={`mr-4 ${selectedCategory === "all" ? "font-bold" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`mr-4 ${
              selectedCategory === "professional" ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("professional")}
          >
            Professional
          </button>
          <button
            className={`${
              selectedCategory === "professional" ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("school")}
          >
            School
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
      {filteredProjects.map((project, index) => (
        // <React.Fragment key={project.id}>
          <div key={project.id}
            className="lg:h-[25rem] lg:w-[23rem] hover:border-none last:border-none mx-5 pt-4"
          >
    <Link href={`/expertise`} as={`/expertise/${project.id}`}>
{/* <span> */}
                <ProjectCard
                  name={project.name}
                  url={project.url}
                  description={project.description}
                  image={project.image}
                  technology={project.technology}
                  href={project.href}
                  id={project.id}
                  onClick={() => handleProjectClick(project.id)}
                />
             {/* </span> */}
            </Link>
          </div>
        // </React.Fragment>
      ))}
      </div>
    </main>
  );
};

export default Projects;
