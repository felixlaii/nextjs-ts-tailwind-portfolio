import ImageSlider from "./ImageSlider";
import Image from "next/image";
import clsx from "clsx";
import { createRef, useState } from "react";

interface CarouselProps {
  carousel: string[];
}

const Carousel: React.FC<CarouselProps> = ({ carousel = [] }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const refs = carousel.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = carousel.length;

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
      className={`absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center ${
        isLeftButton ? "left-2" : "right-2"
      }`}
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
        >
          {sliderControl(true)}
          {carousel.map((img, i) => (
            <div
              className="w-full flex-shrink-0"
              key={`${img} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <Image
                width={500}
                height={500}
                src={img}
                className={clsx(
                  "object-cover w-full h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg"
                )}
                alt="project-carousel"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <ImageSlider carousel={carousel} />
      </div>
    </div>
  );
};

export default Carousel;
