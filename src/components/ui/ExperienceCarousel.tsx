import { createRef, useState } from "react";
import { ProjectCardProps } from "@/types/component-types";
import clsx from "clsx";

const ExperienceCarousel: React.FC<ProjectCardProps> = ({ carouselArray }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  // Check if carouselArray is a string, if so, convert it to an array with a single element
  const initialCarouselArray =
    typeof carouselArray === "string" ? [carouselArray] : carouselArray || [];

  const refs = initialCarouselArray.reduce((acc: any, val: any, i: any) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      // Defines the transition animation.
      behavior: "smooth",
      // Defines vertical alignment.
      block: "nearest",
      // Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = initialCarouselArray.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";
      ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
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
          "relative mt-12 h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg"
        )}
      >
        <div
          className={clsx(
            "flex overflow-x-hidden snap-mandatory snap-x h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg"
          )}
        ></div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
