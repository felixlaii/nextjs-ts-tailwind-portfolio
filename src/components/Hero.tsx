import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="bg-brand-lightest max-h-full mt-16">
      <div className="flex flex-row items-center">
        <div>
          <Image
            width={500}
            height={500}
            src="/images/hero-image.png"
            alt="Hero Image"
            className="w-full"
          />
        </div>
        <div >
          <p>software developer</p>
          <p>& dog lover</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
