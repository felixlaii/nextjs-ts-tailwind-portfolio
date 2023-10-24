import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";
import PageHeading from "@/components/ui/PageHeading";

const Skills = () => {
  // Split SkillsData array into two parts: 8 items for the top row, and 8 items for the bottom row
  const topRowSkills = SkillsData.slice(0, 8);
  const bottomRowSkills = SkillsData.slice(8, 16);

  return (
    <div className="bg-brand-dark pb-20">
      <div>
        <h2>Skills & Tools</h2>
        <p>My Toolbox & Things I can do</p>
        <p>The skills, tools and technologies I use to bring your vision to life</p>
      </div>
      {/* Top Row */}
      <div>
        <ul className="flex justify-between ml-16 mr-16">
          {topRowSkills.map((skill, index) => (
            <li className="flex-row mt-28 text-white" key={skill.image}>
              <div className="flex-col justify-center">
                <div className="flex flex-col justify-center">
                  <div>
                <Image width={70} height={70} src={skill.image} alt="skills" />
                </div>
                <div className="flex justify-center">
                <p>{skill.description}</p>
                </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Row */}
      <div>
        <ul className="flex justify-between mt-20 ml-10 mr-10">
          {bottomRowSkills.map((skill, index) => (
            <li className="flex-row text-white justify-center" key={skill.image}>
              <div className="flex-col">
                <div>
                <Image width={70} height={70} src={skill.image} alt="skills" />
                </div>
                <div className="flex justify-center">
                <p>{skill.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
