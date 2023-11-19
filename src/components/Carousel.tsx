import React, { useState } from "react";
import CarouselIndicator from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselProps } from "@/types/component-types";
import Image from "next/image";

const Carousel: React.FC<CarouselProps> = ({ width, height, items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => (prev + 1 < items.length ? prev + 1 : prev));
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }

  return (
    // <div className="flex items-center justify-center mt-[40rem]">
      <div className="relative h-[20rem] w-2/3">
        {activeIndex > 0 && (
          <button
            className="absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-500 text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12 right-1/2 top-1/2 translate-x-[-200px] translate-y-[-50%] transform sm:translate-x-[-250px] md:translate-x-[-300px] lg:translate-x-[-350px]"
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
            <Image src={item.image} width={100} height={100} alt="project" />
          </CarouselItem>
        ))}
        {activeIndex < items.length - 1 && (
          <button
            className="absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-500 text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12 top-1/2 left-1/2 translate-x-[200px] translate-y-[-50%] transform sm:translate-x-[250px] md:translate-x-[300px] lg:translate-x-[350px]"
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
    // </div>
  );
};

export default Carousel;
