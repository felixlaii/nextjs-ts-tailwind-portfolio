import React from "react";

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

  return (
    <div
      className={`flex flex-col font-custom ${
        isDarkMode ? "bg-dark text-brand-base" : "bg-light text-zinc-200"
      }`}
    >
      <div className="flex justify-center flex-col items-center font-custom">
        <div className="justify-center">
          <h1
            className={`mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest ${
              isDarkMode ? "text-brand-light" : "text-brand-base"
            }`}
          >
            Im Felix
          </h1>
        </div>
        <div className="mx-10">
          <p className="">
            Born in Hong Kong. Raised in the GTA. I attended the University of
            Toronto for a Bachelor of Arts Honours program. I have over 10 years
            of luxury retail management experience from Links of London to
            Burberry to Gucci. Transitioned into tech and absolutely love it!
          </p>
        </div>
        <button onClick={onButtonClick}>Download PDF</button>{" "}
      </div>
    </div>
  );
};

export default About;
