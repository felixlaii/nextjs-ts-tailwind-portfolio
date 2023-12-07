import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSliderProps {
  carousel: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ carousel = [] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {carousel.map((img, i) => (
        <div
          className="h-auto max-w-full rounded-lg"
          key={`${img} - grid - ${i}`}
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={`#${i.toString()}`}>
              <Image
                width={200}
                height={200}
                id={i.toString()}
                src={img}
                className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
                alt="Our Practice"
              />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
