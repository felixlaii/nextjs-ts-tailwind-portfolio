import { createRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import ImageGrid from "./ImageGrid";
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
  return <div></div>;
};

export default ExperienceVideoCarousel;
