import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageGrid: React.FC<ProjectCardProps> = ({
  carouselArray,
  name,
  description,
  image,
  technology,
}) => {
  const initialCarouselArray =
    typeof carouselArray === "string" ? [carouselArray] : carouselArray || [];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {initialCarouselArray.map((img, i) => (
        <motion.div key={`${img} - grid - ${i}`} whileHover={{ scale: 1.2 }}>
          <div className="h-auto max-w-full rounded-lg">
            <a href={`#${i.toString()}`}>
              <Image
                width={300}
                height={300}
                id={i.toString()}
                src={img}
                alt=""
                className="rounded-full object-cover opacity-80 sm:mt-[1rem] lg:mt-[6rem] md:mt-[1rem] z-10 h-[3rem] w-[3.5rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.2rem] lg:h-[4.2rem] lg:w-[4.2rem]"
              />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
