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

export default function FramerCarousel() {
    return (
        <div>

        </div>
    )
}