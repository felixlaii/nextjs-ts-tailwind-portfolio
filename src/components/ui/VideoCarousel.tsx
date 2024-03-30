import React, {
  MouseEvent as ReactMouseEvent,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  onClose,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <video className="w-1/2 h-1/2" controls src={videoUrl} autoPlay />
      <button
        className="absolute top-0 right-0 m-4 text-white"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

interface VideoCarouselProps {
  videoCarousel: string[];
}

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 809;

const CURSOR_SIZE = 80;

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videoCarousel = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeState, setActiveState] = useState<{
    slideIndex: number;
    videoUrl: string | null;
  }>({ slideIndex: START_INDEX, videoUrl: null });

  const handleVideoClick = (videoUrl: string) => {
    setActiveState({ slideIndex: activeState.slideIndex, videoUrl });
  };

  const handleVideoClose = useCallback(() => {
    setActiveState({ slideIndex: activeState.slideIndex, videoUrl: null });
  }, [activeState.slideIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleVideoClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleVideoClose]);

  const canScrollPrev = activeState.slideIndex > 0;
  const canScrollNext = activeState.slideIndex < videoCarousel.length - 1;

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

    const currentOffset = offsetX.get();

    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;

    for (
      let i = activeState.slideIndex;
      dragOffset > 0 ? i >= 0 : i < videoCarousel.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;

      const itemOffset = item.offsetWidth;
      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && dragOffset > offsetWidth + itemOffset && i > 1) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth + -itemOffset &&
          i < videoCarousel.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveState({ slideIndex: i - 1, videoUrl: activeState.videoUrl });
      } else {
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveState({ slideIndex: i + 1, videoUrl: activeState.videoUrl });
      }
      break;
    }
  }

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth =
      itemsRef.current[activeState.slideIndex - 1]?.getBoundingClientRect()
        .width;
    if (nextWidth === undefined) return;

    offsetX.set(offsetX.get() + nextWidth);
    setActiveState({
      slideIndex: activeState.slideIndex - 1,
      videoUrl: activeState.videoUrl,
    });
  }

  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth =
      itemsRef.current[activeState.slideIndex + 1]?.getBoundingClientRect()
        .width;
    if (nextWidth === undefined) return;

    offsetX.set(offsetX.get() - nextWidth);
    setActiveState({
      slideIndex: activeState.slideIndex + 1,
      videoUrl: activeState.videoUrl,
    });
  }

  const [hoverType, setHoverType] = useState<"prev" | "next" | "click" | null>(
    null
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const animatedHoverX = useSpring(mouseX, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });
  const animatedHoverY = useSpring(mouseY, {
    damping: 20,
    stiffness: 400,
    mass: 0.1,
  });

  function navButtonHover({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    const parent = currentTarget.offsetParent;
    if (!parent) return;
    const { left: parentLeft, top: parentTop } = parent.getBoundingClientRect();

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetFromCenterX = clientX - centerX;
    const offsetFromCenterY = clientY - centerY;

    mouseX.set(left - parentLeft + offsetFromCenterX / 4);
    mouseY.set(top - parentTop + offsetFromCenterY / 4);
  }

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center lg:mx-auto pb-8"
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          "relative mt-12 h-64 md:h-96 xl:h-[29rem] max-w-4xl rounded-lg shadow-lg overflow-hidden"
        )}
      >
        <motion.div
          className={cn(
            "pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            x: animatedHoverX,
            y: animatedHoverY,
          }}
        >
          <motion.div
            layout
            className={cn(
              "grid h-full place-items-center rounded-full",
              hoverType === "click" && "absolute inset-7 h-auto"
            )}
          >
            <motion.span
              layout="position"
              className={cn(
                "w-full select-none text-center font-medium uppercase text-gray-900",
                (hoverType === "prev" || hoverType === "next") &&
                  "absolute inset-x-0 top-2",
                hoverType === "click" &&
                  "absolute top-full mt-0.5 w-auto text-sm font-bold text-lime-300"
              )}
            >
              {hoverType ?? "drag"}
            </motion.span>
          </motion.div>
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.ul
            className="flex cursor-none items-start"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              left: -(FALLBACK_WIDTH * (videoCarousel.length - 1)),
              right: 0,
            }}
            onDragStart={() => {
              containerRef.current?.setAttribute("data-dragging", "true");
              setIsDragging(true);
            }}
            onDragEnd={handleDragSnap}
          >
            {videoCarousel.map((video, i) => {
              const active =
                video === activeState.videoUrl && i === activeState.slideIndex;
              return (
                <motion.li
                  key={`${video} - ${i}`}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className={cn(
                    "group relative  shrink-0 select-none transition-opacity duration-300 mx-1"
                  )}
                  onClick={() => handleVideoClick(video)}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  style={{
                    flexBasis: active ? "30%" : "40%",
                  }}
                >
                  <video
                    className={cn(
                      "object-cover w-full h-64 md:h-96 xl:h-[29rem] select-none transition-opacity duration-300 rounded-lg shadow-lg",
                      !active && "opacity-100",
                      active && "opacity-100"
                    )}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </motion.li>
              );
            })}
          </motion.ul>
          {activeState.videoUrl && (
            <VideoPlayer
              videoUrl={activeState.videoUrl}
              onClose={handleVideoClose}
            />
          )}
          <button
            type="button"
            className="group absolute left-[1%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            onMouseEnter={() => setHoverType("prev")}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Previous Guide</span>
            <MoveLeft className="h-10 w-10 text-brand-darkMode stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>
          <button
            type="button"
            className="group absolute right-[1%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            onMouseEnter={() => setHoverType("next")}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Next Guide</span>
            <MoveRight className="text-brand-darkMode h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
