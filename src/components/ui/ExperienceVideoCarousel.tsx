import { createRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import VideoGrid from "./VideoGrid";
import { ExperienceVideoCarouselProps } from "@/types/component-types";

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
            <div
              className="flex justify-center lg:h-[40rem] w-full flex-shrink-0"
              key={`${videoUrl} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              {" "}
              <Image
                width={300}
                height={300}
                src={videoUrl}
                className={clsx(
                  "object-scale-down items-center w-3/4 lg:h-[35rem] lg:w-[30rem] sm:h-[16rem] sm:w-[20rem] md:h-[20rem] md:w-[35rem] xl:h-[29rem] max-w-3xl rounded-lg"
                )}
                alt="Our Practice"
              />
            </div>
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
