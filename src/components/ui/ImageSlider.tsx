import { useState, useRef, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSliderProps {
  carousel: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ carousel = [] }) => {
//   const indicatorWidthPercent =
//     carousel.length > 0 ? 100 / carousel.length : 100;

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const handlePrevSlide = () => {
//     setCurrentSlideIndex((prevIndex) =>
//       prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextSlide = () => {
//     setCurrentSlideIndex((prevIndex) =>
//       prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const sliderCurrent = sliderRef.current;
  
//     if (!sliderCurrent) {
//       return;
//     }
  
//     // Find all the slides inside of the slider
//     const slides = sliderCurrent.querySelectorAll("div");
//     const slidesArray = Array.from(slides);
  
//     // Wait until a slide is 50% visible, then find its index in the array of
//     // all slides and update the currentSlideIndex
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = slidesArray.indexOf(entry.target as HTMLDivElement);
//             setCurrentSlideIndex(index);
//           }
//         });
//       },
//       {
//         root: sliderCurrent,
//         threshold: 0.5,
//       }
//     );
//     slides.forEach((slide) => observer.observe(slide));
  
//     return () => slides.forEach((slide) => observer.unobserve(slide));
//   }, [carousel]);

  return (
    //return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
    {carousel.map((img, i) => (
      <div
        className="h-auto max-w-full rounded-lg"
        key={`${img} - grid - ${i}`}
      >
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href={`#${i.toString()}`}>
            <Image
            width={100}
            height={100}
              id={i.toString()}
              src={img}
              className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
              alt="Our Practice"
            />
          </a>
        </motion.div>
      </div>
    ))}
  </div>
);
};


export default ImageSlider;
