import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroDarkProps> = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  const getImagePath = () => {
    return isDarkMode
      ? "/images/felixlaii-logo-lightest.svg"
      : "/images/felixlaii-logo-light.svg";
  };

  return (
    <div
      className={`flex justify-center max-h-full pt-[3rem] pb-[5rem] md:pt-[1rem] lg:pt-[4rem] ${
        isDarkMode ? "bg-brand-light text-black" : "bg-brand-base text-white"
      }`}
    >
      <div className="flex-column justify-around align-middle items-center">
        <div data-aos="fade-left" className="mr-4">
          <Image
            width={90}
            height={90}
            src={getImagePath()}
            alt="Hero Image"
            className="h-[15rem] w-[17rem] md:w-[23rem] md:h-[18rem] lg:h-[15rem] lg:w-[30rem]"
          />
        </div>
        <div data-aos="fade-right" className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                className="hidden"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div className="toggle-track w-8 h-4 bg-gray-400 rounded-full shadow-inner relative">
                <div
                  className={`toggle-thumb absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isDarkMode ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <p
                className={`font-custom tracking-widest ml-2 ${
                  isDarkMode ? "text-brand-lightest" : "text-brand-light"
                }`}
              >
                dark mode
              </p>
            </div>
          </label>
        </div>

        <div data-aos="fade-up" className="font-custom">
          <p
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4rem] tracking-wide mb-1 ${
              isDarkMode ? "text-brand-lightest" : "text-brand-light"
            }`}
          >
            front-end software developer
          </p>
          <p
            className={`text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] tracking-widest mb-2 ${
              isDarkMode ? "text-brand-lightest" : "text-brand-light"
            }`}
          >
            & dog lover
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
