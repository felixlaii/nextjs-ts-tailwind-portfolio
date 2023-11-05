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
      <div className="flex flex-row items-center">
        <div className="mr-4">
          {/* Adjust margin-right to reduce space between image and text */}
          <Image
            width={300}
            height={300}
            src="/images/hero-image-2.png"
            alt="Hero Image"
            className="sm:h-[25rem] sm:w-[25rem] lg:h-[40rem] lg:w-[40rem]"
          />
        </div>
        <div className="font-custom">
          <p className="sm:text-[3rem] lg:text-[5rem] tracking-wide mb-1">software developer</p>
          {/* Adjust margin-bottom to reduce space between lines of text */}
          <p className="text-[3rem] mb-2">& dog lover</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
