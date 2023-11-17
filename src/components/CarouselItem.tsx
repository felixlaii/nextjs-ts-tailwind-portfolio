import React, { useState } from "react";
import { CarouselItemProps } from "@/types/component-types";

export default function CarouselItem({
  index,
  activeIndex,
  children,
}: CarouselItemProps) {
  const [scaled, setScaled] = useState<Boolean>(false);

  return <div></div>;
}
