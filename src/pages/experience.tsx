import { useRouter } from "next/router";
import Image from "next/image";
import { ProjectCardProps } from "@/types/component-types";
import { FaArrowLeft } from "react-icons/fa";
import Carousel from "@/components/ui/Carousel";
import { useState } from "react";
import VideoCarousel from "@/components/ui/VideoCarousel";

const Experience: React.FC<ProjectCardProps> = ({}) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<"image" | "video">(
    "image"
  );

  const name = router.query.name as string;
  const image = router.query.image as string;
  const githubUrl = router.query.githubUrl as string;
  const deployedUrl = router.query.deployedUrl as string;
  const longDescription = router.query.longDescription as string;
  const carousel = router.query.carousel as string[];
  const videoCarousel = router.query.videoCarousel as string[];
  const technology = router.query.technology as string[] | undefined;

  const goBack = () => {
    router.back();
  };

  console.log(technology);

  return (
    <div className="bg-brand-base dark:bg-brand-darkMode flex flex-col items-center justify-center min-h-screen pt-[10rem]">
      <div className="flex flex-row  items-center mx-auto">
        <div className="align-middle">
          <FaArrowLeft className="h-10 w-5 cursor-pointer" onClick={goBack} />
        </div>
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] ml-4 tracking-widest font-custom text-brand-darkMode dark:text-brand-lightMode">
          {name}
        </h2>
      </div>
      <div className="bg-brand-darkMode dark:bg-brand-base w-full">
        {videoCarousel !== undefined &&
          carousel !== undefined &&
          carousel.length > 1 && (
            <div className="flex justify-center mt-4 ">
              <button
                className={`mr-4 ${
                  selectedCategory === "image"
                    ? "font-bold font-custom text-brand-altDarkMode dark:text-brand-darkMode text-[1.2rem] tracking-[0.2rem]"
                    : "font-bold font-custom text-brand-cardbg dark:text-brand-cardbg text-[1rem] tracking-widest"
                }`}
                onClick={() => setSelectedCategory("image")}
              >
                Images
              </button>
              <button
                className={`${
                  selectedCategory === "video"
                    ? "font-bold font-custom text-brand-altDarkMode dark:text-brand-darkMode text-[1.2rem] tracking-[0.2rem]"
                    : "font-bold font-custom text-brand-cardbg dark:text-brand-cardbg text-[1rem] tracking-widest"
                }`}
                onClick={() => setSelectedCategory("video")}
              >
                Videos
              </button>
            </div>
          )}
      </div>
      {selectedCategory === "image" && (
        <div className="bg-brand-darkMode dark:bg-brand-base w-full">
          <div className=" pb-4">
            {carousel && carousel.length > 0 ? (
              <Carousel carousel={carousel} />
            ) : (
              <Image
                className="object-fit mx-auto rounded-md"
                src={image}
                height={400}
                width={400}
                alt="project-image"
              />
            )}
          </div>
          {(githubUrl || deployedUrl) && (
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-row mb-9">
                {githubUrl && (
                  <a
                    className="border-double border-4 border-brand-lightMode dark:border-brand-darkMode hover:border-brand-darkest px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-lightish dark:hover:text-brand-cardbg bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {deployedUrl && (
                  <a
                    className="border-double border-4 border-brand-lightMode dark:border-brand-darkMode hover:border-brand-darkest px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-lightish dark:hover:text-brand-cardbg bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    href={deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed
                  </a>
                )}
              </div>
              <div className="flex flex-row justify-evenly">
                {technology && Array.isArray(technology) && (
                  <div className="flex flex-col items-center text-center mx-auto">
                    <div className="flex flex-row">
                      {technology.map((iconUrl: string, index: number) => (
                        <Image
                          key={index}
                          src={iconUrl}
                          alt={`tech-icon-${index}`}
                          height={100}
                          width={100}
                          className="w-8 h-8 flex-row mx-5 mb-6"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="bg-brand-base dark:bg-brand-darkMode w-full mx-auto pt-7 pb-7 px-9">
            <p className="whitespace-pre-line mt-4 max-w-[900px] text-4 sm:text-[1.5rem] md:text-[2rem] lg:text-[1.3rem] text-brand-altDarkMode dark:text-brand-bgdark tracking-widest mx-auto text-center font-custom pb-4">
              {longDescription}
            </p>
          </div>
        </div>
      )}

      {selectedCategory === "video" && (
        <div className="bg-brand-darkMode dark:bg-brand-base w-full">
          <div className=" pb-4">
            {videoCarousel && videoCarousel.length > 0 ? (
              <VideoCarousel videoCarousel={videoCarousel} />
            ) : (
              <Image
                className="object-fit mx-auto rounded-md"
                src={image}
                height={400}
                width={400}
                alt="project-image"
              />
            )}
          </div>
          {(githubUrl || deployedUrl) && (
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-row mb-9">
                {githubUrl && (
                  <a
                    className="border-double border-4 border-brand-lightMode dark:border-brand-darkMode hover:border-brand-darkest px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-lightish dark:hover:text-brand-cardbg bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {deployedUrl && (
                  <a
                    className="border-double border-4 border-brand-lightMode dark:border-brand-darkMode hover:border-brand-darkest px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-lightish dark:hover:text-brand-cardbg bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    href={deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed
                  </a>
                )}
              </div>
              <div className="flex flex-row justify-evenly">
                {technology && Array.isArray(technology) && (
                  <div className="flex flex-col items-center text-center mx-auto">
                    <div className="flex flex-row">
                      {technology.map((iconUrl: string, index: number) => (
                        <Image
                          key={index}
                          src={iconUrl}
                          alt={`tech-icon-${index}`}
                          height={100}
                          width={100}
                          className="w-8 h-8 flex-row mx-5 mb-6"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="bg-brand-base dark:bg-brand-darkMode w-full mx-auto pt-7 pb-7 px-9">
            <p className="whitespace-pre-line mt-4 max-w-[900px] text-4 sm:text-[1.5rem] md:text-[2rem] lg:text-[1.3rem] text-brand-altDarkMode dark:text-brand-bgdark tracking-widest mx-auto text-center font-custom pb-4">
              {longDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
