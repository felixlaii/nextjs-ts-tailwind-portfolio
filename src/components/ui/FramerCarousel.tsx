import { MouseEvent as ReactMouseEvent, useRef, useState } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion"
import { MoveLeft, MoveRight } from "lucide-react"

import { cn } from "@/lib/utils"

const START_INDEX = 1
const DRAG_THRESHOLD = 150
const FALLBACK_WIDTH = 509

const CURSOR_SIZE = 80

interface FramerCarouselProps {
    carousel: string[];
  }

const FramerCarousel: React.FC<FramerCarouselProps> = ({ carousel = [] }) => {
    const containerRef = useRef<HTMLUListElement>(null)
    const itemsRef = useRef<(HTMLLIElement | null)[]>([])
    const [activeSlide, setActiveSlide] = useState(START_INDEX)
    const canScrollPrev = activeSlide > 0
    const canScrollNext = activeSlide < carousel.length - 1
    const offsetX = useMotionValue(0)
    const animatedX = useSpring(offsetX, {
      damping: 20,
      stiffness: 150,
    })

    const [isDragging, setIsDragging] = useState(false)

    function handleDragSnap(
        _: MouseEvent,
        { offset: { x: dragOffset } }: PanInfo,
    ) {
        //reset drag state
        setIsDragging(false)
    }

    return (
        <div>

        </div>
    )
}

export default FramerCarousel;