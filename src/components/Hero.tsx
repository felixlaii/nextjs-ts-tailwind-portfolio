import Image from "next/image";

interface HeroDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroDarkProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`flex justify-center max-h-full pt-[10rem] pb-[5rem] ${
        isDarkMode ? "bg-brand-light text-white" : "bg-brand-base text-black"
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
