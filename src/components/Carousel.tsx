import React, { useState } from "react";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselProps } from "@/types/component-types";

export default function Carousel({ width, height, items }: CarouselProps) {
    const [activeIndex, onSetActiveIndex] = useState<number>(0)
    return (
        <div>

        </div>
    )
}
