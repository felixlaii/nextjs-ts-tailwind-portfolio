import React from "react";
import { CarouselIndicatorProps } from "@/types/component-types";

export default function CarouselIndicator({ activeIndex, length, maxIndicatorVisible = 7, onSetActiveIndex }: CarouselIndicatorProps) {
    const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;
    
    return (
        <div className="carousel-indicator">
        {Array.from(Array(maxIndicator), (_, index) => {
          return (
            <div
              key={index}
              className={`carousel-indicator-dots
              ${activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"}`}
              onClick={() => {
                onSetActiveIndex(index);
              }}
            ></div>
          );
        })}
      </div>
    )
}