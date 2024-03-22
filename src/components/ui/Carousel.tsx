import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselProps {
  carousel: Array<{ imageUrl?: string; videoUrl?: string }>;
}

const START_INDEX = 0;
const FALLBACK_WIDTH = 509;

const CURSOR_SIZE = 80;

const Carousel: React.FC<CarouselProps> = ({ carousel = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < carousel.length - 1;

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current[activeSlide - 1]?.clientWidth;
    if (nextWidth === undefined) return;

    offsetX.set(offsetX.get() + nextWidth);
    setActiveSlide((prev) => prev - 1);
  }

  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current[activeSlide + 1]?.clientWidth;
    if (nextWidth === undefined) return;

    offsetX.set(offsetX.get() - nextWidth);
    setActiveSlide((prev) => prev + 1);
  }

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    const currentOffset = offsetX.get();
    const dragThreshold = Math.abs(dragOffset);

    if (
      dragThreshold < 150 ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    const offsetWidth = itemsRef.current
      .slice(0, activeSlide + (dragOffset > 0 ? 0 : 1))
      .reduce((acc, item) => acc + (item?.clientWidth ?? FALLBACK_WIDTH), 0);

    const newIndex = dragOffset > 0 ? activeSlide - 1 : activeSlide + 1;
    offsetX.set(currentOffset + (dragOffset > 0 ? offsetWidth : -offsetWidth));
    setActiveSlide(newIndex);
  }

  console.log("Carousel Data:", carousel);

  return (
    <div className="relative mt-12 h-64 md:h-96 xl:h-[29rem] max-w-2xl rounded-lg shadow-lg overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
        drag="x"
        dragConstraints={{
          left: -(FALLBACK_WIDTH * (carousel.length - 1)),
          right: 0,
        }}
        onDragStart={() =>
          containerRef.current?.setAttribute("data-dragging", "true")
        }
        onDragEnd={handleDragSnap}
        style={{ x: animatedX }}
        ref={containerRef}
      >
        {carousel.map((item, index) => (
          <motion.div
            key={index}
            ref={(el) => (itemsRef.current[index] = el as HTMLDivElement)}
            className="flex-shrink-0"
            style={{ width: "100%" }}
          >
            {item.imageUrl && (
              <Image
                width={200}
                height={200}
                src={item.imageUrl}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            )}
            {item.videoUrl && (
              <video
                className={cn(
                  "object-cover  h-64 md:h-96 xl:h-[29rem] max-w-2xl rounded-lg shadow-lg"
                )}
                controls
              >
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        ))}
      </motion.div>
      <button
        type="button"
        className="absolute left-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
        style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <MoveLeft className="h-10 w-10 text-brand-dark stroke-[1.5] transition-colors" />
      </button>
      <button
        type="button"
        className="absolute right-[18%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
        style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <MoveRight className="text-brand-dark h-10 w-10 stroke-[1.5] transition-colors" />
      </button>
    </div>
  );
};

export default Carousel;
