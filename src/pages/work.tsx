import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ProjectsData } from "../../data/projects-data";
import ProjectCard from "@/components/ui/ProjectCard";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { ProjectCardProps } from "@/types/component-types";
interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const router = useRouter();
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

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

  const Column: React.FC<{ filteredProjects: any[]; y: any }> = ({
    filteredProjects,
    y,
  }) => {
    return (
      <motion.div
        className="column relative h-full w-1/4 min-w-[250px] flex flex-col gap-8"
        style={{ y }}
      >
        {filteredProjects.map((project, index) => {
          return (
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
          );
        })}
      </motion.div>
    );
  };

  return (
    <main
      className={`flex flex-col overflow-x-hidden items-center font-custom min-h-screen pb-16 ${
        isDarkMode ? "bg-dark text-white " : "bg-light text-black"
      } `}
    >
      <div>
        <h2
          className={`text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl tracking-widest pb-5 mt-9 ${
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

      <div
        ref={gallery}
        className="h-screen bg-gray-900 relative flex gap-8 p-8 box-border overflow-hidden"
      >
        <Column
          filteredProjects={ProjectsData.map((project) => ({
            name: project.name,
            description: project.description,
            image: project.image,
            technology: project.technology,
            githubUrl: project.githubUrl,
            deployedUrl: project.deployedUrl,
            id: project.id,
            longDescription: project.longDescription,
            carousel: project.carousel,
          }))}
          y={y}
        />
      </div>

      <div className="h-full"></div>
    </main>
  );
};

export default Projects;
