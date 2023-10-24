import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="bg-brand-darkest max-h-full mt-16">
      <div className="flex flex-row items-center">
        <div>
          <Image
            width={200}
            height={200}
            src="/images/hero-image.png"
            alt="Hero Image"
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
