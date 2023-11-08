import Image from "next/image";

interface HeroDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroDarkProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`max-h-full ${
        isDarkMode ? "bg-brand-light text-white" : "bg-brand-base text-black"
      }`}
    >
      <div className="flex flex-row justify-around align-middle items-center">
        <div className="mr-4">
          {/* Adjust margin-right to reduce space between image and text */}
          <Image
            width={100}
            height={100}
            src="/images/hero-image-2.png"
            alt="Hero Image"
            className="sm:h-[20rem] sm:w-[20rem] md:w-[23rem] md:h-[23rem] lg:h-[28rem] lg:w-[28rem]"
          />
        </div>
        <div className="font-custom">
          <p className="sm:text-[2.3rem] md:text-[3rem] lg:text-[4rem] tracking-wide mb-1">software developer</p>
          {/* Adjust margin-bottom to reduce space between lines of text */}
          <p className="sm:text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] tracking-widest mb-2">& dog lover</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
