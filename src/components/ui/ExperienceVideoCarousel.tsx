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

  return <div></div>;
};

export default ExperienceVideoCarousel;
