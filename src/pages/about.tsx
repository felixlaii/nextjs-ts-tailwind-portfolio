import React from "react";

interface AboutDarkProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutDarkProps> = ({ isDarkMode }) => {
  return (
    <div className={`flex flex-col font-custom ${isDarkMode ? "bg-dark text-white" : "bg-light text-black"}`}>
      <div className="flex justify-center flex-col items-center font-custom">
        <div className="justify-center">
          <h1 className={`mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest ${isDarkMode ? "text-brand-light" : "text-brand-base"}`}>
            About Felix
          </h1>
        </div>
        <div>
          <p>
            Born in Hong Kong. Raised in the GTA. I attended the University of Toronto for a Bachelor of Arts Honours program. I have over 10 years of luxury retail management experience from Links of London to Burberry to Gucci. Transitioned into tech and absolutely love it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
