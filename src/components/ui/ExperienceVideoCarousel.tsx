import { createRef, useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import VideoGrid from "./VideoGrid";
import { ExperienceVideoCarouselProps } from "@/types/component-types";
import { cn } from "@/lib/utils";
import { VideoPlayerProps } from "@/types/component-types";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Image from "next/image";

// export const VideoPlayer: React.FC<VideoPlayerProps> = ({
//   videoUrl,
//   onClose,
//   onClick,
// }) => {
//   const handleClick = () => {
//     if (onClick) {
//       onClick();
//     }
//   };
//   return (
//     <div className="fixed w-1/2 h-1/2 bg-black bg-opacity-80 flex justify-center items-center z-50">
//       <ReactPlayer
//         className="w-full"
//         controls={false}
//         src={videoUrl}
//         // onClick={(event) => handleClick()}
//       />
//       <button
//         className="absolute top-0 right-0 m-4 text-white"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   );
// };

const START_INDEX = 0;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 809;

interface RefObject<T> {
  current: T | null;
}

type RefArray<T> = Array<RefObject<T>>;

const ExperienceVideoCarousel: React.FC<ExperienceVideoCarouselProps> = ({
  videoCarouselArray,
  name,
  description,
  image,
  technology,
}) => {
  const [activeState, setActiveState] = useState<{
    slideIndex: number;
    videoUrl: string | null;
  }>({ slideIndex: START_INDEX, videoUrl: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const initialVideoCarouselArray =
    typeof videoCarouselArray === "string"
      ? [videoCarouselArray]
      : videoCarouselArray || [];

  const refs: RefArray<HTMLDivElement> = initialVideoCarouselArray.map(() =>
    createRef()
  );

  const handleVideoClick = useCallback((videoUrl: string) => {
    setActiveState({ slideIndex: 0, videoUrl });
    setModalIsOpen(true);
  }, []);
  const handleVideoClose = useCallback(() => {
    setActiveState({ slideIndex: activeState.slideIndex, videoUrl: null });
    setModalIsOpen(false);
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

  const scrollToVideo = (i: number) => {
    setActiveState({ slideIndex: i, videoUrl: initialVideoCarouselArray[i] });
    refs[i].current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalVideos = initialVideoCarouselArray.length;

  const nextVideo = () => {
    let newIndex = activeState.slideIndex + 1;
    if (newIndex >= totalVideos) {
      newIndex = 0;
    }
    if (
      activeState.videoUrl &&
      newIndex === initialVideoCarouselArray.indexOf(activeState.videoUrl)
    ) {
      newIndex = newIndex + 1;
      if (newIndex >= totalVideos) {
        newIndex = 0;
      }
    }
    scrollToVideo(newIndex);
  };

  const previousVideo = () => {
    let newIndex = activeState.slideIndex - 1;
    if (newIndex < 0) {
      newIndex = totalVideos - 1;
    }
    if (
      activeState.videoUrl &&
      newIndex === initialVideoCarouselArray.indexOf(activeState.videoUrl)
    ) {
      newIndex = newIndex - 1;
      if (newIndex < 0) {
        newIndex = totalVideos - 1;
      }
    }
    scrollToVideo(newIndex);
  };

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousVideo : nextVideo}
      className={`absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center slider-control
      ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] h-[40rem] mx-5 pb-8"
      )}
    >
      <div
        className={clsx(
          "relative mt-12 h-72 sm:h-100 md:h-100 lg:w-auto xl:h-[29rem] rounded-lg"
        )}
      >
        <div
          className={clsx(
            "flex items-center overflow-x-hidden snap-mandatory snap-x h-96 lg:h-[30rem] md:h-96 xl:h-[29rem] max-w-3xl rounded-lg"
          )}
        >
          {sliderControl(true)}
          {initialVideoCarouselArray.map((videoUrl, i) => (
            <div
              className="flex justify-center lg:h-[40rem] w-full flex-shrink-0"
              key={`${videoUrl} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <div onClick={() => handleVideoClick(videoUrl)}>
                {/* <Image width={300} height={300} src={image} alt="thumbnail" /> */}
                <video>
                  {" "}
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
              {/* <VideoPlayer videoUrl={videoUrl} onClose={handleVideoClose} /> */}

              {/* <video
                  className={cn(
                    "object-contain w-[50rem] h-[50rem] sm:h-[55rem] md:h-[40rem] md:w-3/4 lg:h-[40rem] xl:h-[35rem] xl:pt-[4rem] select-none transition-opacity duration-300 rounded-lg shadow-lg"
                  )}
                  controls
                  onClick={(event) => handleVideoClick(event)}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video> */}
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-[5rem] md:mt-[2rem] lg:mt-0 max-w-3xl">
        <VideoGrid
          videoCarouselArray={videoCarouselArray}
          name={name}
          description={description}
          image={image}
          technology={technology}
        />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={handleVideoClose}>
        {activeState.videoUrl && (
          <ReactPlayer url={activeState.videoUrl} controls={true} />
        )}
      </Modal>
    </div>
  );
};

export default ExperienceVideoCarousel;
