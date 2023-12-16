import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  const { scrollY } = useScroll();

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

  const yRange = useTransform(scrollY, [0, 200], [0, -100]);

  return (
    <main
      className={`flex flex-col overflow-x-hidden items-center font-custom min-h-screen pb-16 ${
        isDarkMode ? "bg-dark text-white " : "bg-light text-black"
      }`}
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
          {/* Your filter buttons */}
        </div>
      </div>

      <motion.div
        style={{ y: yRange }}
        className="flex flex-wrap justify-center gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="lg:h-[25rem] lg:w-[23rem] hover:border-none last:border-none mx-3 pt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span onClick={() => handleProjectClick(project.id)}>
              <ProjectCard
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
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Projects;
