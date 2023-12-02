import React from "react";
import jsPDF from "jspdf";
import Link from "next/link";
interface AboutDarkProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutDarkProps> = ({ isDarkMode }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/felix-lai-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
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
        isDarkMode ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      <div className="flex justify-center flex-col items-center font-custom">
        <div className="justify-center">
          <h1
            className={`mt-9 text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest ${
              isDarkMode ? "text-brand-light" : "text-brand-base"
            }`}
          >
            About Felix
          </h1>
        </div>
        <div>
          <p>
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
