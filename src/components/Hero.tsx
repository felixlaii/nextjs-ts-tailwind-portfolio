import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="bg-brand-base max-h-full mt-13">
      <div className="flex flex-row items-center">
        <div>
          <Image
            width={400}
            height={400}
            src="/images/hero-image.png"
            alt="Hero Image"
          />
        </div>
        <div >
          <p className="text-[5rem]">software developer</p>
          <p className="text-[3rem]">& dog lover</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
