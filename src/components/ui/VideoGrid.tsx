import { ProjectCardProps } from "@/types/component-types";
import { motion } from "framer-motion";

const VideoGrid: React.FC<ProjectCardProps> = ({ videoCarouselArray }) => {
  const initialVideoCarouselArray =
    typeof videoCarouselArray === "string"
      ? [videoCarouselArray]
      : videoCarouselArray || [];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {initialVideoCarouselArray.map((videoUrl: any, i: any) => (
        <motion.div
          key={`${videoUrl} - grid - ${i}`}
          whileHover={{ scale: 1.2 }}
        >
          <div className=" max-w-full rounded-lg">
            <a href={`#${i.toString()}`}>
              <video
                id={i.toString()}
                className="rounded-full object-cover opacity-80 mt-36 sm:mt-[8rem] lg:mt-[15rem] md:mt-[10rem] xl:mt-[1rem] md:mt-[1rem]  z-10 h-[3rem] w-[3.5rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4.2rem] lg:h-[4.2rem] lg:w-[4.2rem]"
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
