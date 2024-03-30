import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-brand-lightMode text-black dark:bg-brand-light dark:text-white flex justify-center max-h-full pt-[3rem] pb-[5rem] md:pt-[1rem] lg:pt-[4rem]">
      <div className="flex-column align-middle items-center">
        <div data-aos="fade-left">
          <Image
            width={90}
            height={90}
            alt="Hero Image"
            className="ml-4 h-[15rem] w-[17rem] md:w-[23rem] md:h-[18rem] lg:h-[15rem] lg:w-[30rem] hidden dark:block"
            src="/images/felixlaii-logo-lighter.svg"
          />
          <Image
            width={90}
            height={90}
            alt="Hero Image"
            className="block dark:hidden ml-4 h-[15rem] w-[17rem] md:w-[23rem] md:h-[18rem] lg:h-[15rem] lg:w-[30rem]"
            src="/images/felixlaii-logo-light.svg"
          />
        </div>

        <div data-aos="fade-up" className="flex-column font-custom ml-4">
          <p className="text-brand-light dark:text-brand-lighter text-[2rem] md:text-[3rem] lg:text-[4rem] tracking-wide mb-1">
            front-end software developer
          </p>
          <p className="text-brand-light dark:text-brand-lighter text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] tracking-widest mb-2">
            & dog lover
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
