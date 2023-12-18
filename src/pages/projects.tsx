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
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

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
        className="column relative h-full w-1/4 min-w-[250px] flex flex-col gap-1" // Adjust the gap as needed
        style={{ y }}
      >
        {filteredProjects.map((project, index) => {
          const topPosition = index * 7; // Adjust the multiplier as needed
          return (
            <motion.div
              key={project.id}
              className="lg:h-[25rem] lg:w-[23rem] relative h-full w-1/4 min-w-[250px] flex flex-col gap-2" // Adjust the gap as needed
              style={{ top: `${topPosition}vh` }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="h-full w-full relative rounded-lg overflow-hidden"
                onClick={() => handleProjectClick(project.id)}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  borderRadius: "1vw",
                  overflow: "hidden",
                }}
              >
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
      className={`flex flex-col justify-center items-center font-custom  ${
        isDarkMode ? "bg-dark text-white " : "bg-light text-black"
      } `}
    >
      <div className="flex flex-col items-center">
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
      <div className="h-full"></div>
      <div
        ref={gallery}
        className="h-min-screen w-full justify-center items-center bg-gray-900 relative flex gap-2 p-8 box-border overflow-hidden"
      >
        <Column
          filteredProjects={[
            {
              name: ProjectsData[4].name,
              description: ProjectsData[4].description,
              image: ProjectsData[4].image,
              technology: ProjectsData[4].technology,
              githubUrl: ProjectsData[4].githubUrl,
              deployedUrl: ProjectsData[4].deployedUrl,
              id: ProjectsData[4].id,
              longDescription: ProjectsData[4].longDescription,
              carousel: ProjectsData[4].carousel,
            },
            {
              name: ProjectsData[1].name,
              description: ProjectsData[1].description,
              image: ProjectsData[1].image,
              technology: ProjectsData[1].technology,
              githubUrl: ProjectsData[1].githubUrl,
              deployedUrl: ProjectsData[1].deployedUrl,
              id: ProjectsData[1].id,
              longDescription: ProjectsData[1].longDescription,
              carousel: ProjectsData[1].carousel,
            },
            {
              name: ProjectsData[0].name,
              description: ProjectsData[0].description,
              image: ProjectsData[0].image,
              technology: ProjectsData[0].technology,
              githubUrl: ProjectsData[0].githubUrl,
              deployedUrl: ProjectsData[0].deployedUrl,
              id: ProjectsData[0].id,
              longDescription: ProjectsData[0].longDescription,
              carousel: ProjectsData[0].carousel,
            },
            {
              name: ProjectsData[7].name,
              description: ProjectsData[7].description,
              image: ProjectsData[7].image,
              technology: ProjectsData[7].technology,
              githubUrl: ProjectsData[7].githubUrl,
              deployedUrl: ProjectsData[7].deployedUrl,
              id: ProjectsData[7].id,
              longDescription: ProjectsData[7].longDescription,
              carousel: ProjectsData[7].carousel,
            },
          ]}
          y={y}
        />

        <Column
          filteredProjects={[
            {
              name: ProjectsData[3].name,
              description: ProjectsData[3].description,
              image: ProjectsData[3].image,
              technology: ProjectsData[3].technology,
              githubUrl: ProjectsData[3].githubUrl,
              deployedUrl: ProjectsData[3].deployedUrl,
              id: ProjectsData[3].id,
              longDescription: ProjectsData[3].longDescription,
              carousel: ProjectsData[3].carousel,
            },
            {
              name: ProjectsData[5].name,
              description: ProjectsData[5].description,
              image: ProjectsData[5].image,
              technology: ProjectsData[5].technology,
              githubUrl: ProjectsData[5].githubUrl,
              deployedUrl: ProjectsData[5].deployedUrl,
              id: ProjectsData[5].id,
              longDescription: ProjectsData[5].longDescription,
              carousel: ProjectsData[5].carousel,
            },
            {
              name: ProjectsData[2].name,
              description: ProjectsData[2].description,
              image: ProjectsData[2].image,
              technology: ProjectsData[2].technology,
              githubUrl: ProjectsData[2].githubUrl,
              deployedUrl: ProjectsData[2].deployedUrl,
              id: ProjectsData[2].id,
              longDescription: ProjectsData[2].longDescription,
              carousel: ProjectsData[2].carousel,
            },
            {
              name: ProjectsData[6].name,
              description: ProjectsData[6].description,
              image: ProjectsData[6].image,
              technology: ProjectsData[6].technology,
              githubUrl: ProjectsData[6].githubUrl,
              deployedUrl: ProjectsData[6].deployedUrl,
              id: ProjectsData[6].id,
              longDescription: ProjectsData[6].longDescription,
              carousel: ProjectsData[6].carousel,
            },
          ]}
          y={y3}
        />

        {/* <Column
          filteredProjects={[
            {
              name: ProjectsData[6].name,
              description: ProjectsData[6].description,
              image: ProjectsData[6].image,
              technology: ProjectsData[6].technology,
              githubUrl: ProjectsData[6].githubUrl,
              deployedUrl: ProjectsData[6].deployedUrl,
              id: ProjectsData[6].id,
              longDescription: ProjectsData[6].longDescription,
              carousel: ProjectsData[6].carousel,
            },
            {
              name: ProjectsData[7].name,
              description: ProjectsData[7].description,
              image: ProjectsData[7].image,
              technology: ProjectsData[7].technology,
              githubUrl: ProjectsData[7].githubUrl,
              deployedUrl: ProjectsData[7].deployedUrl,
              id: ProjectsData[7].id,
              longDescription: ProjectsData[7].longDescription,
              carousel: ProjectsData[7].carousel,
            },
          ]}
          y={y3}
        /> */}

        {/* <Column
          filteredProjects={[
            {
              name: ProjectsData[1].name,
              description: ProjectsData[1].description,
              image: ProjectsData[1].image,
              technology: ProjectsData[1].technology,
              githubUrl: ProjectsData[1].githubUrl,
              deployedUrl: ProjectsData[1].deployedUrl,
              id: ProjectsData[1].id,
              longDescription: ProjectsData[1].longDescription,
              carousel: ProjectsData[1].carousel,
            },
            ...(Array.isArray(ProjectsData[3])
              ? ProjectsData[3].map((project) => ({
                  name: project.name,
                  description: project.description,
                  image: project.image,
                  technology: project.technology,
                  githubUrl: project.githubUrl,
                  deployedUrl: project.deployedUrl,
                  id: project.id,
                  longDescription: project.longDescription,
                  carousel: project.carousel,
                }))
              : []),
          ]}
          y={y4}
        /> */}
      </div>{" "}
      <div className="h-full"></div>
      {/* <div className="h-full"></div> */}
    </main>
  );
};

export default Projects;
