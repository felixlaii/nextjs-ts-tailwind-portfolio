import Image from "next/image";

interface HeroDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroDarkProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`flex justify-center max-h-full pt-[10rem] pb-[5rem] ${
        isDarkMode ? "bg-brand-base text-white" : "bg-brand-light text-black"
      }`}
    >
      <div className="flex-column justify-around align-middle items-center">
        <div className="mr-4">
          <Image
            width={100}
            height={100}
            src="/images/felixlaii-logo.svg"
            alt="Hero Image"
            className="sm:h-[20rem] sm:w-[20rem] md:w-[23rem] md:h-[23rem] lg:h-[15rem] lg:w-[30rem]"
          />
        </div>
        <div className="flex items-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative pl-4">
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
            </div>
          </label>
        </div>
        <div className="font-custom">
          <p className="sm:text-[2.3rem] md:text-[3rem] lg:text-[4rem] tracking-wide mb-1">
            front-end software developer
          </p>
          <p className="sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] tracking-widest mb-2">
            & dog lover
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
