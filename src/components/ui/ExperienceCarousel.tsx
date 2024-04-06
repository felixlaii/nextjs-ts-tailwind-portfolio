import { createRef, useState } from "react";
import { ProjectCardProps } from "@/types/component-types";
import clsx from "clsx";
import Image from "next/image";
import ImageGrid from "./ImageGrid";
import { ExperienceCarouselProps } from "@/types/component-types";
const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({
  carouselArray,
  name,
  description,
  image,
  technology,
}) => {
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
          {initialCarouselArray.map((img, i) => (
            <div
              className="flex justify-center lg:h-[40rem] w-full flex-shrink-0"
              key={`${img} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              {" "}
              <Image
                width={300}
                height={300}
                src={img}
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
        <ImageGrid
          carouselArray={carouselArray}
          name={name}
          description={description}
          image={image}
          technology={technology}
        />
      </div>
    </div>
  );
};

export default ExperienceCarousel;
