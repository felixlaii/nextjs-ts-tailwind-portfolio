import { useState, useRef, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";

const ImageSlider: React.FC<ProjectCardProps> = ({ carousel = [] }) => {
  const indicatorWidthPercent =
    carousel.length > 0 ? 100 / carousel.length : 100;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
        return;
    }
})

  return <div></div>;
};

export default ImageSlider;
