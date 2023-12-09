import React, { useEffect } from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const topRowSkills = SkillsData.slice(0, 8);
  const bottomRowSkills = SkillsData.slice(8, 16);

  useEffect(() => {
    AOS.init({
         duration: 1500,
         once: false,
       })
 }, [])

  return (
    <section
      className={`flex flex-col font-custom ${
        isDarkMode
          ? "bg-brand-light text-black"
          : "bg-brand-base text-brand-light"
      }`}
    >
      <div className="mx-auto">
        <div  className="flex justify-center flex-col items-center font-custom">
          <div data-aos='fade-right'>
          <h2
            className={`mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest ${
              isDarkMode ? "text-brand-lightest" : "text-brand-light"
            }`}
          >
            My Expertise
          </h2>
          </div>
        </div>
        {/* Top Row */}
        <div
          className={`flex flex-col mb-14 border-4 border-brand-light mt-10 mx-9 pt-7 pb-7 lg:w-[50rem] xl:w-[65rem] ${
            isDarkMode ? "border-brand-base" : "border-brand-dark"
          }`}
        >
          <div>
            <ul className="flex justify-between items-center mx-4 sm:mx-auto">
              {topRowSkills.map((skill, index) => (
                <li
                  className="flex flex-col items-center text-white"
                  key={skill.image}
                >
                  <Image
                    width={50}
                    height={50}
                    src={skill.image}
                    alt="skills"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] xl:mt-[2rem] mx-4"
                  />
                  <p className="text-[0.6rem] font-extralight mt-2 text-center">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Row */}
          <div>
            <ul className="flex justify-between mx-4 sm:mx-auto mt-4">
              {bottomRowSkills.map((skill, index) => (
                <li
                  className="flex flex-col items-center text-white"
                  key={skill.image}
                >
                  <Image
                    width={50}
                    height={50}
                    src={skill.image}
                    alt="skills"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-[3rem] lg:h-[3rem] xl:w-[4rem] xl:h-[4rem] xl:mt-[2rem] mx-4"
                  />
                  <p className="text-[0.6rem] font-extralight mt-2 text-center xl:mb-[2rem]">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
