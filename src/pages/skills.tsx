import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";

const Skills = () => {
    // Split SkillsData array into two parts: 8 items for the top row, and 8 items for the bottom row
    const topRowSkills = SkillsData.slice(0, 8);
    const bottomRowSkills = SkillsData.slice(8, 16);

    return (
        <div>
            {/* Top Row */}
            <div>
                <ul className="flex justify-between ml-10 mr-10">
                    {topRowSkills.map((skill, index) => (
                        <li className="flex-row mt-28" key={skill.image}>
                            <div className="flex-col items-center">
                            <Image width={70} height={70} src={skill.image} alt="skills" />
                            <p>{skill.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Row */}
            <div>
                <ul className="flex justify-between mt-20 ml-10 mr-10">
                    {bottomRowSkills.map((skill, index) => (
                        <li className="flex-row" key={skill.image}>
                          <div className="flex-col">
                            <Image width={70} height={70} src={skill.image} alt="skills" />
                            <p>{skill.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
