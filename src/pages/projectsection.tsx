import React, { useState } from "react";
import { useRouter } from "next/router";
import { ProjectsData } from "../../data/projects-data";
import ProjectSetUp from "@/components/ui/ProjectSetUp";

interface ProjectSetUpProps {
  isDarkMode: boolean;
}

const ProjectSection: React.FC<ProjectSetUpProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
            longDescription: selectedProject.longDescription,
            deployedUrl: selectedProject.deployedUrl,
            githubUrl: selectedProject.githubUrl,
            carousel: selectedProject.carousel,
          },
        },
        `/experience#${selectedProject.id}`
      );
    }
  };

  return (
    <main
      className={`flex flex-col overflow-x-hidden items-center font-custom min-h-screen w-full pb-16 ${
        isDarkMode ? "bg-dark text-white " : "bg-light text-black"
      } `}
    >
      <div>
        <h2
          className={`text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 mt-9 ${
            isDarkMode ? "text-brand-light" : "text-brand-base"
          }`}
        >
          Explore My Work ...
        </h2>
        <div className="flex justify-center items-center align-middle mb-4">
          <p className="font-custom pr-4">Filter:</p>
          <button
            className={`mr-4 ${
              selectedCategory === "all"
                ? "font-bold text-brand-lightest text-[1rem] tracking-widest"
                : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`mr-4 ${
              selectedCategory === "professional"
                ? "font-bold text-brand-lightest text-[1rem] tracking-widest"
                : ""
            }`}
            onClick={() => setSelectedCategory("professional")}
          >
            Professional
          </button>

          <button
            className={`${
              selectedCategory === "school"
                ? "font-bold text-brand-lightest text-[1rem] tracking-widest"
                : ""
            }`}
            onClick={() => setSelectedCategory("school")}
          >
            School
          </button>
        </div>
      </div>

      <div className="">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="lg:h-[25rem] lg:w-[50rem] hover:border-none last:border-none mx-3 pt-4"
          >
            <span onClick={() => handleProjectClick(project.id)}>
              <ProjectSetUp
                name={project.name}
                githubUrl={project.githubUrl}
                deployedUrl={project.deployedUrl}
                description={project.description}
                longDescription={project.longDescription}
                image={project.image}
                technology={project.technology}
                id={project.id}
                isDarkMode={isDarkMode}
                onClick={() => handleProjectClick(project.id)}
                carousel={project.carousel}
              />
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProjectSection;
