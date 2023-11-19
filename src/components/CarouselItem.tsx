import React, { useState } from "react";
import { CarouselItemProps } from "@/types/component-types";
import Image from "next/image";
export default function CarouselItem({
    index,
    activeIndex,
    children,
  }: CarouselItemProps) {
    const [scaled, setScaled] = useState<boolean>(false);
  

    if (!children) {
        // Handle case when children is null or undefined
        return null;
      }

    const offset = (index - activeIndex) / 4;
    const direction = Math.sign(index - activeIndex);
    const absOffset = Math.abs(offset);
  
    const cssTransformProperties = `
      rotateY(calc(${offset} * 55deg))
      scaleY(calc(1 + ${absOffset} * -0.5))
      translateX(calc(${direction} * -3.5rem))
      translateZ(calc(${absOffset} * -35rem))
      scale(${scaled && index === activeIndex ? 6.5 : 1})
    `;
  
    const cssOpacity = `
      ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;
  
    return (
        <div
        className="absolute h-[70rem] w-full cursor-pointer overflow-hidden rounded-3xl drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-700 ease-in-out"
        style={{
          transform: `${cssTransformProperties} translateX(-50%) translateY(-50%)`,
          opacity: cssOpacity,
          zIndex: `${scaled ? 100 : 1}`,
        }}
        onClick={() => {
          setScaled(!scaled);
        }}
      >
        <Image src={children.props.src} width={200} height={200} alt="project" />
      </div>
    );
  }