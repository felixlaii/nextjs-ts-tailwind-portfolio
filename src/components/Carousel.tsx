import React, { useState } from "react";
import { CarouselItem } from "./ui/CarouselItem";
import CarouselIndicator from "./ui/CarouselIndicator";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselProps } from "@/types/component-types";

export default function Carousel({ width, height, items}: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);


}