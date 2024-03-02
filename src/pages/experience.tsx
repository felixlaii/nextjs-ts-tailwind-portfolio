import { useRouter } from "next/router";
import Image from "next/image";
import { ProjectCardProps } from "@/types/component-types";
import { FaArrowLeft } from "react-icons/fa";
import Carousel from "@/components/ui/Carousel";

const Experience: React.FC<ProjectCardProps> = () => {
  const router = useRouter();

  const name = router.query.name as string;
  const image = router.query.image as string;
  const technology = router.query.technology as string[] | undefined;
  const githubUrl = router.query.githubUrl as string;
  const deployedUrl = router.query.deployedUrl as string;
  const longDescription = router.query.longDescription as string;
  const carousel = router.query.carousel as string[];

  const goBack = () => {
    router.back();
  };

  return (
    <div className="bg-brand-base flex flex-col items-center justify-center min-h-screen pt-[4rem]">
      <div className="flex flex-row items-center mx-auto">
        <div className="align-middle">
          <FaArrowLeft className="h-10 w-5 cursor-pointer" onClick={goBack} />
        </div>
        <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] ml-4 tracking-widest font-custom text-brand-dark">
          {name}
        </h2>
      </div>

      {carousel && carousel.length > 0 ? (
        <div className="flex flex-col items-center bg-brand-light w-full text-center mt-4">
          <div className="mt-4 mx-auto">
            <Carousel carousel={carousel} />
          </div>
          <div className="bg-brand-base w-full mx-auto pt-7 pb-7 px-9">
            <p className="mt-4 max-w-[900px] lg:text-[1.5rem] text-4 sm:text-[1.5rem] md:text-[2rem] text-brand-dark tracking-widest mx-auto text-center font-custom pb-4">
              {longDescription}
            </p>
          </div>
        </div>
      ) : (
        // Render the single image
        image && (
          <div className="bg-brand-light w-full pt-9">
            <div className="mt-4 pb-9">
              <Image
                className="object-fit mx-auto rounded-md"
                src={image}
                height={400}
                width={400}
                alt="project-image"
              />
            </div>
            <div className="bg-brand-base w-full mx-auto pt-7 pb-7 px-9">
              <p className="mt-4 max-w-[900px] text-4 sm:text-[1.5rem] md:text-[2rem] lg:text-[1.5rem] text-brand-dark tracking-widest mx-auto text-center font-custom pb-4">
                {longDescription}
              </p>
            </div>
          </div>
        )
      )}

      <div className="flex flex-col items-center bg-brand-base w-full mx-auto pt-7 pb-7">
        {technology && Array.isArray(technology) && (
          <div className="flex flex-col items-center text-center mx-auto">
            <h3 className="font-custom text-[1.5rem] sm:text-[1.8rem] md:text-[2.3rem] lg:text-[2.3rem] mt-4 mb-5 text-brand-dark tracking-widest">
              Technology used
            </h3>
            <div className="flex flex-row">
              {technology.map((iconUrl: string, index: number) => (
                <Image
                  key={index}
                  src={iconUrl}
                  alt={`tech-icon-${index}`}
                  height={100}
                  width={100}
                  className="w-10 h-10 mx-2 flex-row"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center bg-brand-light w-full mx-auto pt-9">
        {(githubUrl || deployedUrl) && (
          <div className="flex flex-col items-center text-center mx-auto">
            <h3 className="font-custom text-[1.5rem] sm:text-[1.8rem] md:text-[2.3rem] lg:text-[2.3rem] mb-5 text-brand-lightish tracking-widest">
              View My Work
            </h3>
            <div className="flex flex-row mb-9">
              {githubUrl && (
                <a
                  className="border-double border-4 border-brand-lightish hover:border-brand-dark hover:text-brand-lightish px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-light bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {deployedUrl && (
                <a
                  className="border-double border-4 border-brand-lightish hover:border-brand-dark px-10 hover:text-brand-lightish mx-4 font-custom tracking-wide rounded-sm hover:text-brand-light bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  href={deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
