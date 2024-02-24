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
      className={`flex flex-col overflow-x-hidden items-center font-custom min-h-screen pb-16 ${
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
      </div>
    </main>
  );
};
export default ProjectSection;
