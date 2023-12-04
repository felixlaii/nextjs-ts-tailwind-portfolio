import React from "react";
import { CarouselIndicatorProps } from "@/types/component-types";

export default function CarouselIndicator({ activeIndex, length, maxIndicatorVisible = 5, onSetActiveIndex,} : CarouselIndicatorProps) {
    const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;

    return (
        <div>
            
        </div>
    )
}