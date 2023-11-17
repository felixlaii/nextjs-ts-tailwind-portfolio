import React, { useState } from "react";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselProps } from "@/types/component-types";
import Image from "next/image";

const Carousel: React.FC<CarouselProps> = ({ width, height, items }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    function handleNextItemBtn() {
        setActiveIndex((prev) => {
          return prev + 1 < items.length ? prev + 1 : prev;
        });
      }
    
      function handlePrevItemBtn() {
        setActiveIndex((prev) => {
          return prev - 1 >= 0 ? prev - 1 : prev;
        });
      }
    return (
<div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {items?.map((item, index) => (
        <CarouselItem
        key={index}
        index={index}
        activeIndex={activeIndex}
      >        
        <Image src={item.image} width={100} height={100} alt="project"/>
      </CarouselItem>
      ))}
      {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
    )
}

export default Carousel;
