import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <div className="bg-brand-darkest max-h-full mt-16">
      <Image
        width={200}
        height={200}
        src="/images/hero-image.png"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
