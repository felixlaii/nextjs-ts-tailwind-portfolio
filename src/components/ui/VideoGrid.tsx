import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
const VideoGrid: React.FC<ProjectCardProps> = ({
  videoCarouselArray,
  name,
  description,
  image,
  technology,
}) => {
  const initialVideoCarouselArray =
    typeof videoCarouselArray === "string"
      ? [videoCarouselArray]
      : videoCarouselArray || [];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {initialVideoCarouselArray.map((videoUrl: any, i: any) => (
        <motion.div
          key={`${videoUrl} - grid - ${i}`}
          whileHover={{ scale: 1.1 }}
        >
          <div className="h-auto max-w-full rounded-lg">
            <a href={`#${i.toString()}`}>
              <video
                id={i.toString()}
                className="rounded-full object-cover opacity-80 mx-4 mt-24 lg:mt-[1rem] z-10 h-[3rem] w-[3.5rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.2rem] lg:h-[4.2rem] lg:w-[4.5rem]"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoGrid;
