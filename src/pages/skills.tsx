import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";

const Skills = () => {
        // Calculate the midpoint of the SkillsData array
        const midpoint = Math.ceil(SkillsData.length / 2);

         // Split the SkillsData array into two separate arrays
    const firstRowSkills = SkillsData.slice(0, midpoint);
    const secondRowSkills = SkillsData.slice(midpoint);
    return (
        <div>
            <ul className="flex">
                {SkillsData.map((skill, index) => (
                    <li className="flex-row mt-20" key={skill.image}>
                        <Image width={150}
            height={150} src={skill.image} alt="skills" />
            <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Skills;