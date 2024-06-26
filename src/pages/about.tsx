import React, { useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
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
      once: true,
    });
  }, []);

  return (
    <div className="bg-brand-darkMode text-zinc-300 dark:bg-brand-altDarkMode dark:text-brand-base">
      <div className="flex justify-center flex-col items-center font-custom">
        <div data-aos="zoom-in-down" className="justify-center">
          <h1 className="text-3d dark:text-brand-darkMode text-brand-base mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest">
            What About Me
          </h1>
        </div>
        <div data-aos="fade-right" className="flex text-center mx-10">
          <p className="text-xs sm:text-md md:text-[1rem] lg:text-lg xl:text-xl tracking-widest">
            Born in Hong Kong. Raised in the GTA. I attended the University of
            Toronto for a Bachelor of Arts Honours program. <br />
            I have over 10 years of luxury retail management experience from
            Links of London to Burberry to Gucci. <br />
            I decided to do the Software Engineering boot camp at BrainStation
            and I have absolutely fallen in love with coding.
            <br />
            The thing I love most about coding is the constant learning
            involved. Post boot camp, I have learned Nextjs, TailwindCSS and
            TypeScript and many more.
            <br />
            <br />I have included a downloadable resume below if you want to
            connect
          </p>
        </div>
        <button
          data-aos="fade-up"
          className="dark:text-brand-lightest dark:border-brand-darkMode text-brand-lightMode border-brand-base flex flex-row border-double border-4 border-brand-base items-center px-5 py-2.5 text-center me-2 mb-9 mt-4 font-custom tracking-wider rounded-md hover:text-brand-lightest bg-gradient-to-r from-brand-darkMode/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          onClick={onButtonClick}
        >
          Download Resume <IoMdDownload />
        </button>{" "}
      </div>
    </div>
  );
};

export default About;
