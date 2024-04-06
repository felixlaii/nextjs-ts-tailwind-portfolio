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
        <motion.div key={`${img} - grid - ${i}`} whileHover={{ scale: 1.1 }}>
          <div className="h-auto max-w-full rounded-lg">
            <a href={`#${i.toString()}`}>
              <Image
                width={300}
                height={300}
                id={i.toString()}
                src={img}
                alt=""
                className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
              />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
