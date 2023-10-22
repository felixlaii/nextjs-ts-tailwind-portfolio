import React from "react";
import { SkillsData } from "../../data/skills-data";
import Image from "next/image";

const Skills = () => {
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