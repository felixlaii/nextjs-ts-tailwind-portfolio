import React, { useState } from "react";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? ProjectsData
      : ProjectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col items-center bg-brand-light pb-10">
      <div>
        <h2 className="text-[4.5rem] pb-5">Projects</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`mr-4 ${
              selectedCategory === "all" ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All Projects
          </button>
          <button
            className={`mr-4 ${
              selectedCategory === "school" ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory("school")}
          >
            School Projects
          </button>
          <button
            className={`${selectedCategory === "professional" ? "font-bold" : ""}`}
            onClick={() => setSelectedCategory("professional")}
          >
            Professional Projects
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.name}
            className="h-[26rem] hover:border-none  last:border-none mx-10 pt-4"
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
  );
};

export default Projects;
