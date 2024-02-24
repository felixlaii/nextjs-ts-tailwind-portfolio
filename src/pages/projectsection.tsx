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

  return <div></div>;
};
export default ProjectSection;
