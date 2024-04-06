import { createRef, useState } from "react";
import { ProjectCardProps } from "@/types/component-types";

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

  return <div></div>;
};

export default ExperienceCarousel;
