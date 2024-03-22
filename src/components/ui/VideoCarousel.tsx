import { MouseEvent as ReactMouseEvent, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCarouselProps {
  videoCarousel: string[];
}

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;

const CURSOR_SIZE = 80;

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videoCarousel = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);

  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");
    animatedX.stop();
  }

  return <div></div>;
};

export default VideoCarousel;
