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
    <section className="flex flex-col items-center font-custom py-5 dark:bg-brand-darkMode dark:text-brand-lightMode bg-brand-lightMode text-brand-darkMode">
      <div data-aos="zoom-in-up">
        <h2 className="text-center text-3d text-brand-darkMode dark:text-brand-lightest text-[3.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
          Expertise
        </h2>
      </div>
      <div className="flex flex-col  text-center grid grid-cols-1 divide-y divide-brand-cardbg w-full sm:px-10 md:w-100 lg:w-4/5 pb-4 px-4">
        {SkillsData.map((category, index) => (
          <div key={index} className="w-auto">
            <button
              className="flex flex-row items-center justify-between mx-auto mt-4 px-4 py-2 lg:text-[1.2rem] w-full dark:text-brand-lightMode text-brand-headerbg hover:tracking-widest transition-all duration-500 ease-out"
              onClick={() => handleCategoryClick(category.category)}
            >
              {category.category}
              <CiSaveDown1 className="animate-bounce ml-2 text-[1.7rem] dark:text-brand-lightMode text-brand-headerbg" />
            </button>

            <div
              className={`overflow-hidden ${
                selectedCategory === category.category ? "h-auto" : "h-0"
              }`}
            >
              <ul className="flex flex-wrap justify-center items-center mx-4 my-4 sm:mx-auto">
                {category.technologies.map((skill, index) => (
                  <li
                    className="flex flex-col items-center text-white w-100"
                    key={index}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={skill.image}
                      alt="skills"
                      className="transition-all duration-500 ease-out w-5 h-5 hover:w-8 hover:h-8 mx-[1.6rem] sm:w-10 sm:h-10 hover:sm:w-[3rem] hover:sm:h-[3rem] sm:mx-[2.4rem] md:w-10 md:h-10 hover:md:w-12 hover:md:h-12  md:mx-[1.5rem] lg:w-[2.8rem] lg:h-[2.8rem] hover:lg:w-[3rem] hover:lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] hover:xl:w-[4.3rem] hover:xl:h-[4.3rem]  xl:mt-[1rem] lg:mx-14"
                    />
                    <p className="text-brand-darkMode dark:text-gray-800 text-[0.7rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.9rem] font-extralight mt-2 text-center text-brand-altDarkMode pb-4 tracking-wider sm:tracking-wider lg:tracking-widest md:tracking-widest hover:tracking-[0.1rem] transition-all duration-500 ease-out">
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
