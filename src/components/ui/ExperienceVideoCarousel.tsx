import { createRef, useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import VideoGrid from "./VideoGrid";
import { ExperienceVideoCarouselProps } from "@/types/component-types";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const START_INDEX = 0;

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
      ${isLeftButton ? "left-1" : "right-1"}`}
      style={{ top: "68%" }}
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
              className="flex justify-center lg:h-[40rem] w-full flex-shrink-0 cursor-pointer"
              key={`${videoUrl} - ${i}`}
              ref={refs[i]}
              id={i.toString()}
            >
              <div onClick={() => handleVideoClick(videoUrl)}>
                <video controls>
                  {" "}
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleVideoClose}
        style={{
          overlay: {
            backgroundColor: "rgba(142, 171, 184, 0.2)",
          },
          content: {
            width: "850px",
            height: "80vh",
            margin: "auto",
            padding: "0px",
            border: "none",
            overflow: "hidden",
          },
        }}
      >
        {activeState.videoUrl && (
          <ReactPlayer
            height="80vh"
            width="850px"
            url={activeState.videoUrl}
            controls={true}
          />
        )}
      </Modal>
    </div>
  );
};

export default ExperienceVideoCarousel;
