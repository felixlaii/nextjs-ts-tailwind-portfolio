import { createRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import VideoGrid from "./VideoGrid";
import { ExperienceVideoCarouselProps } from "@/types/component-types";
import { cn } from "@/lib/utils";
import { VideoPlayerProps } from "@/types/component-types";
import { motion } from "framer-motion";

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  onClose,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <video className="w-1/2 h-1/2" controls src={videoUrl} autoPlay />
      <button
        className="absolute top-0 right-0 m-4 text-white"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

const ExperienceVideoCarousel: React.FC<ExperienceVideoCarouselProps> = ({
  videoCarouselArray,
  name,
  description,
  image,
  technology,
}) => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  const initialVideoCarouselArray =
    typeof videoCarouselArray === "string"
      ? [videoCarouselArray]
      : videoCarouselArray || [];

  const refs = initialVideoCarouselArray.reduce(
    (acc: any, val: any, i: any) => {
      acc[i] = createRef();
      return acc;
    },
    {}
  );

  const scrollToVideo = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentVideo(i);
    refs[i].current.scrollIntoView({
      // Defines the transition animation.
      behavior: "smooth",
      // Defines vertical alignment.
      block: "nearest",
      // Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalVideos = initialVideoCarouselArray.length;

  const nextVideo = () => {
    if (currentVideo >= totalVideos - 1) {
      scrollToVideo(0);
    } else {
      scrollToVideo(currentVideo + 1);
    }
  };

  const previousVideo = () => {
    if (currentVideo === 0) {
      scrollToVideo(totalVideos - 1);
    } else {
      scrollToVideo(currentVideo - 1);
    }
  };

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousVideo : nextVideo}
      className={`absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center
      ${isLeftButton ? "left-30" : "right-1"}`}
      style={{ top: "45%" }}
    >
      <span
        role="presentation"
        aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}
      >
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] mx-5 lg:mx-auto pb-8"
      )}
    >
      <div
        className={clsx(
          "relative mt-12 h-72 md:h-96 lg:w-auto xl:h-[29rem] rounded-lg"
        )}
      >
        <div
          className={clsx(
            "flex items-center overflow-x-hidden snap-mandatory snap-x h-64 lg:h-[30rem] md:h-96 xl:h-[29rem] max-w-3xl rounded-lg"
          )}
        >
          {sliderControl(true)}
          {initialVideoCarouselArray.map((videoUrl, i) => (
            <motion.div
              className="flex justify-center lg:h-[40rem] w-full flex-shrink-0"
              key={`${videoUrl} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              {" "}
              <video
                className={cn(
                  "object-contain w-[50rem] h-[50rem] md:h-96 lg:h-[40rem] xl:h-[25rem] select-none transition-opacity duration-300 rounded-lg shadow-lg"
                )}
                controls
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </motion.div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <VideoGrid
          videoCarouselArray={videoCarouselArray}
          name={name}
          description={description}
          image={image}
          technology={technology}
        />
      </div>
    </div>
  );
};

export default ExperienceVideoCarousel;
