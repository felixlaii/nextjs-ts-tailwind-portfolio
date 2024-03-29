import React, { useEffect } from "react";
import Image from "next/image";
import { SkillsData } from "../../data/skills-data";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
  const topRowSkills = SkillsData.slice(0, 8);
  const bottomRowSkills = SkillsData.slice(8, 16);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <section className="dark:bg-brand-light dark:text-brand-light bg-brand-base text-black flex flex-col font-custom">
      <div className="mx-auto">
        <div className="flex justify-center flex-col items-center font-custom">
          <div data-aos="zoom-in">
            <h2 className="text-3d text-brand-light dark:text-brand-lightest mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
              My Expertise
            </h2>
          </div>
        </div>
        {/* Top Row */}
        <div
          data-aos="fade-down"
          className="dark:border-brand-base border-brand-light flex flex-col mb-14 border-4 mt-10 mx-9 pt-7 pb-7 lg:w-[50rem] xl:w-[65rem]"
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
