import ImageSlider from "./ImageSlider";
import clsx from "clsx";
import { createRef, useState } from "react";
import { ProjectCardProps } from "@/types/component-types";
const Carousel: React.FC<ProjectCardProps> = ({ carousel = [] }) => {
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
  return <div></div>;
};

export default Carousel;
