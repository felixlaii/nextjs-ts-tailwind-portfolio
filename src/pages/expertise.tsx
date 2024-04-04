import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SkillsData } from "../../data/skills-data";
import { CiSaveDown1 } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <section className="dark:bg-brand-darkMode dark:text-brand-lightMode bg-brand-lightMode text-brand-darkMode flex flex-col font-custom py-5">
      <div data-aos="zoom-in-up">
        <h2 className="text-center text-3d text-brand-darkMode dark:text-brand-lightest text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
          Expertise
        </h2>
      </div>
      <div className="mx-auto flex flex-col text-center grid grid-cols-1 divide-y divide-brand-cardbg w-3/4 lg:w-3/5 pb-4">
        {SkillsData.map((category, index) => (
          <div key={index} className="w-auto">
            <button
              className="flex flex-row items-center justify-between mx-auto mt-4 px-4 py-2 focus:outline-none lg:text-[1.2rem] w-full dark:text-brand-lightMode text-brand-headerbg transition-all duration-300 ease-in-out hover:tracking-widest"
              onClick={() => handleCategoryClick(category.category)}
            >
              {category.category}
              <CiSaveDown1 className="ml-2 text-[1.7rem] dark:text-brand-lightMode text-brand-headerbg transition duration-3000 animate-bounce" />
            </button>

            <div
              className={`overflow-hidden transition duration-100 ease-in-out ${
                selectedCategory === category.category ? "h-auto" : "h-0"
              }`}
            >
              <ul className="flex justify-center items-center mx-4 sm:mx-auto">
                {category.technologies.map((skill, index) => (
                  <li
                    className="flex flex-col items-center text-white"
                    key={index}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={skill.image}
                      alt="skills"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-[2.3rem] lg:h-[2.5rem] xl:w-[4rem] xl:h-[4rem] xl:mt-[2rem] mx-8"
                    />
                    <p className="text-[0.6rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.7rem] sm:text-[0.7rem] font-extralight mt-2 text-center text-brand-altDarkMode pb-4">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
