import React from "react";
import { IoMdDownload } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AboutDarkProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutDarkProps> = ({ isDarkMode }) => {
  const onButtonClick = () => {
    fetch("/felix-lai-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "/felix-lai-resume.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div
      className={`flex flex-col font-custom ${
        isDarkMode ? "bg-dark text-brand-base" : "bg-light text-zinc-200"
      }`}
    >
      <div className="flex justify-center flex-col items-center font-custom">
        <div data-aos='fade-down' className="justify-center">
          <h1
            className={`mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest ${
              isDarkMode ? "text-brand-light" : "text-brand-base"
            }`}
          >
            What About Me
          </h1>
        </div>
        <div data-aos='fade-right' className="flex text-center mx-10">
          <p className="text-sm tracking-widest">
            Born in Hong Kong. Raised in the GTA. I attended the University of
            Toronto for a Bachelor of Arts Honours program. <br />
            I have over 10 years of luxury retail management experience from
            Links of London to Burberry to Gucci. <br />
            Transitioned into tech and absolutely love it! <br />I have included
            a downloadable resume below if you want to connect
          </p>
        </div>
        <button data-aos='fade-up'
          className={`flex flex-row border-2 border-brand-base items-center px-5 py-2.5 text-center me-2 mb-9 mt-4 font-custom tracking-wider rounded-md hover:text-brand-lightest bg-gradient-to-r from-brand-light/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${
            isDarkMode
              ? "text-brand-lightest border-brand-dark"
              : "text-brand-dark border-brand-base"
          }`}
          onClick={onButtonClick}
        >
          Download Resume <IoMdDownload />
        </button>{" "}
      </div>
    </div>
  );
};

export default About;
