import { useState, useRef, useEffect } from "react";
import { ProjectCardProps } from "@/types/component-types";

const ImageSlider: React.FC<ProjectCardProps> = ({ carousel = [] }) => {
    const indicatorWidthPercent = carousel.length > 0 ? 100 / carousel.length : 100;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    return (
    <div>

    </div>


)
}

export default ImageSlider;