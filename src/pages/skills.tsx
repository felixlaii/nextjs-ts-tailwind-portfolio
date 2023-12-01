import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const topRowSkills = SkillsData.slice(0, 8);
  const bottomRowSkills = SkillsData.slice(8, 16);

  return (
    <section
      className={`flex flex-col font-custom ${
        isDarkMode ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      <div className="mx-auto">
        <div className="flex justify-center flex-col items-center font-custom">
          <h2 className="mt-9 sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
            My Expertise
          </h2>
        </div>
        {/* Top Row */}
        <div className="flex flex-col mb-10 border-2 mt-10 sm:mx-9 pt-7 pb-7">
          <div>
            <ul className="flex justify-between items-center mx-4 sm:mx-auto">
              {topRowSkills.map((skill, index) => (
                <li className="flex flex-col items-center text-white" key={skill.image}>
                  <Image
                    width={50}
                    height={50}
                    src={skill.image}
                    alt="skills"
                    className="w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-4"
                  />
                  <p className="text-[0.6rem] font-extralight mt-2 text-center">{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Row */}
          <div>
            <ul className="flex justify-between mx-4 sm:mx-auto mt-4">
              {bottomRowSkills.map((skill, index) => (
                <li className="flex flex-col items-center text-white" key={skill.image}>
                  <Image
                    width={50}
                    height={50}
                    src={skill.image}
                    alt="skills"
                    className="w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-4"
                  />
                  <p className="text-[0.6rem] font-extralight mt-2 text-center">{skill.description}</p>
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
