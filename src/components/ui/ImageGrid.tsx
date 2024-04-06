import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";

const ImageGrid: React.FC<ProjectCardProps> = ({ image }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {image.map((img, i) => (
        <div>
          <motion.div>
            <a>
              <Image width={100} height={100} />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
