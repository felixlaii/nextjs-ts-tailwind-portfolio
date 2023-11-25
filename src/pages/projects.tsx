import React, { useState } from "react";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";
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

    const selectedProject = ProjectsData.find(
      (project) => project.id === projectId
    );

    if (selectedProject) {
      router.push(
        {
          pathname: "/experience",
          query: {
            id: projectId,
            name: selectedProject.name,
            description: selectedProject.description,
            image: selectedProject.image,
            technology: selectedProject.technology,
            href: selectedProject.href,
          },
        },
        `/experience#${selectedProject.id}`, // Specify the URL displayed in the address bar
      );
    }
  };


  return (
    <main
      className={`flex flex-col items-center font-custom ${
        isDarkMode ? "bg-brand-base text-white " : "bg-brand-light text-black"
      } pb-10`}
    >
      <div>
        <h2 className="sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5">
          Explore My Work ...
        </h2>
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
          
          <div
            key={project.id}
            className="lg:h-[25rem] lg:w-[23rem] hover:border-none last:border-none mx-5 pt-4"
          >
            <span onClick={() => handleProjectClick(project.id)}>
              <ProjectCard
                name={project.name}
                href={project.href}
                description={project.description}
                image={project.image}
                technology={project.technology}
                // href={project.href}
                id={project.id}
                onClick={() => handleProjectClick(project.id)}
              />
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
