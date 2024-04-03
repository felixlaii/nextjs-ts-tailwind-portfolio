import React, { useState } from "react";
import Image from "next/image";
import { SkillsData } from "../../data/skills-data";

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section className="dark:bg-brand-darkMode dark:text-brand-darkMode bg-brand-lightMode text-black flex flex-col font-custom">
      <div className="mx-auto">
        {SkillsData.map((category, index) => (
          <div key={index} className="border">
            <button
              className="mx-auto mt-4 px-4 py-2 font-semibold rounded-full focus:outline-none"
              onClick={() => handleCategoryClick(category.category)}
            >
              {category.category}
            </button>
            {selectedCategory === category.category && (
              <ul className="flex justify-between items-center mx-4 sm:mx-auto">
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
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] xl:mt-[2rem] mx-4"
                    />
                    <p className="text-[0.6rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.7rem] sm:text-[0.7rem] font-extralight mt-2 text-center">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
