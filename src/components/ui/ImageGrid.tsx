import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";
import Image from "next/image";
const ImageGrid: React.FC<ProjectCardProps> = ({ image }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      <div className="h-auto max-w-full rounded-lg">
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a>
            <Image
              className="rounded-sm object-center w-[25rem] sm:w-[15rem] md:w-[20rem] lg:w-[15rem]"
              width={300}
              height={300}
              src={image}
              alt="project logo"
            />{" "}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageGrid;
