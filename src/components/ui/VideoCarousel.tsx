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
