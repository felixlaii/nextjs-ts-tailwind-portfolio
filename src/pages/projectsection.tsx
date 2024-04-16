import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProjectsData } from "../../data/projects-data";
import ProjectSetUp from "@/components/ui/ProjectSetUp";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("professional");
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

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
            videoCarousel: selectedProject.videoCarousel,
          },
        },
        `/experience#${selectedProject.id}`
      );
    }
  };

  return (
    <main className="dark:bg-brand-altDarkMode dark:text-black bg-light text-white flex flex-col overflow-x-hidden items-center font-custom min-h-screen w-full pb-8">
      <div data-aos="zoom-in-up">
        <h2 className="text-3d dark:text-brand-darkMode text-brand-base text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 mt-9">
          Explore My Work ...
        </h2>
        <div className="flex justify-center items-center align-middle mb-4">
          <p className="font-custom text-brand-lightMode dark:text-brand-base text-[1rem] tracking-wider pr-4">
            Filter:
          </p>
          <button
            className={`mr-4 ${
              selectedCategory === "all"
                ? "font-bold text-brand-altDarkMode dark:text-brand-darkMode text-[1.1rem] tracking-widest"
                : "font-bold text-brand-lightMode dark:text-brand-lightMode text-[0.8rem] hover:tracking-[0.2rem] tracking-widest transition-all duration-500 ease-in-out"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`mr-4 ${
              selectedCategory === "professional"
                ? "font-bold text-brand-altDarkMode dark:text-brand-darkMode text-[1.1rem] tracking-widest"
                : "font-bold text-brand-lightMode dark:text-brand-lightMode text-[0.8rem] hover:tracking-[0.2rem] tracking-widest transition-all duration-500 ease-in-out"
            }`}
            onClick={() => setSelectedCategory("professional")}
          >
            Professional
          </button>

          <button
            className={`${
              selectedCategory === "school"
                ? "font-bold text-brand-altDarkMode dark:text-brand-darkMode text-[1.1rem] tracking-widest"
                : "font-bold text-brand-lightMode dark:text-brand-lightMode text-[0.8rem] hover:tracking-[0.2rem] tracking-widest transition-all duration-500 ease-in-out"
            }`}
            onClick={() => setSelectedCategory("school")}
          >
            Personal
          </button>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 gap-6 mx-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="mt-10 mb-10 sm:h-full lg:h-[20rem] lg:w-[40rem] hover:border-none last:border-none"
          >
            <span onClick={() => handleProjectClick(project.id)}>
              <ProjectSetUp
                index={project.index}
                name={project.name}
                githubUrl={project.githubUrl}
                deployedUrl={project.deployedUrl}
                description={project.description}
                longDescription={project.longDescription}
                image={project.image}
                technology={project.technology}
                id={project.id}
                onClick={() => handleProjectClick(project.id)}
                carouselArray={project.carousel}
                videoCarouselArray={project.videoCarousel}
              />
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProjectSection;
