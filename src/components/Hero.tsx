import Image from "next/image";

interface HeroDarkProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroDarkProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`max-h-full mt-13 ${
        isDarkMode ? "bg-brand-light text-white" : "bg-brand-base text-black"
      }`}
    >
      <div className="flex flex-row items-center">
        <div>
          <Image
            width={400}
            height={400}
            src="/images/hero-image-1.png"
            alt="Hero Image"
          />
        </div>
        <div className="font-custom">
          <p className="text-[5rem]">software developer</p>
          <p className="text-[3rem]">& dog lover</p>
        </div>
      </div>
  
    </div>
  );
};

export default Hero;
