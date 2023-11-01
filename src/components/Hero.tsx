import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Save the dark mode state to local storage or a state management solution if needed
  };
  

  return (
    <div className="bg-brand-base max-h-full mt-13">
{/* //       <div className={clsx(
        "bg-brand-base max-h-full mt-13",
    isDarkMode ? "bg-brand-light text-dark" : "bg-brand-dark text-black"
  )} */}
{/* // > */}

     
      <div className="flex flex-row items-center">
        <div>
          <Image
            width={400}
            height={400}
            src="/images/hero-image-1.png"
            alt="Hero Image"
          />
        </div>
        <div >
          <p className="text-[5rem]">software developer</p>
          <p className="text-[3rem]">& dog lover</p>
        </div>
      </div>
{/* //  </div> */}
    </div>
  );
};

export default Hero;
