import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";

interface SkillsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const Skills: React.FC<SkillsProps> = ({ isDarkMode, toggleDarkMode }) => {
  
  // Split SkillsData array into two parts: 8 items for the top row, and 8 items for the bottom row
  const topRowSkills = SkillsData.slice(0, 8);
  const bottomRowSkills = SkillsData.slice(8, 16);

  return (
    <section className={`flex flex-col font-custom ${isDarkMode ? "bg-dark text-white" : "bg-light text-black"}`}>
      {" "}
      <div className="mx-auto">
      <div className="flex justify-center flex-col items-center font-custom">
        <h2 className="sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">My Expertise</h2>
   
      </div>
      {/* Top Row */}
      <div className="flex flex-col mb-10 border-2 mt-10 ">
        <div>
          <ul className="flex justify-between ml-16 mr-16 mt-0 ">
            {topRowSkills.map((skill, index) => (
              <li className="flex-row mt-28 text-white px-4" key={skill.image}>
                <div className="flex-col">
                  <div>
                    <div>
                      <Image
                        width={70}
                        height={70}
                        src={skill.image}
                        alt="skills"
                        className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3.5rem] lg:h-70 lg:w-70"
                      />
                    </div>
                    <div className="flex justify-center">
                      <p className="text-sm pt-2">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Row */}
        <div>
          <ul className="flex justify-between mt-20 ml-10 mr-10 mb-28">
            {bottomRowSkills.map((skill, index) => (
              <li className="flex-row text-white" key={skill.image}>
                <div className="flex-col">
                  <div>
                    <Image
                      width={70}
                      height={70}
                      src={skill.image}
                      alt="skills"
                      className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3.5rem] lg:h-70 lg:w-70"

                    />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-sm pt-2">{skill.description}</p>
                  </div>
                </div>
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
