import React from "react";
import { CarouselIndicatorProps } from "@/types/component-types";

export default function CarouselIndicator({ activeIndex, length, maxIndicatorVisible = 7, onSetActiveIndex }: CarouselIndicatorProps) {
    const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;
    
    return (
        <div className="absolute left-1/2 -top-8 flex h-5 w-24 -translate-x-1/2 transform items-center justify-center space-x-1">
        {Array.from(Array(maxIndicator), (_, index) => {
          return (
            <div
              key={index}
              className={`h-2 w-2 rounded-full bg-white opacity-50 transition-all duration-500 hover:w-1 hover:opacity-100
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