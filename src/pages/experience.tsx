import { useRouter } from "next/router";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";

const Experience: React.FC<ProjectCardProps> = () => {
  const router = useRouter();

  const id = router.query.id as string;
  const name = router.query.name as string;
  const description = router.query.description as string;
  const image = router.query.image as string;
  const technology = router.query.technology as string[] | undefined;
  const githubUrl = router.query.githubUrl as string;
  const deployedUrl = router.query.deployedUrl as string;
  const longDescription = router.query.longDescription as string;

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen mb-2 flex flex-col items-center justify-start pt-[10rem]">
      <div className="flex justify-start w-full mb-4 pl-8">
        <button
          className="border border-brand-dark px-4 py-2 rounded-md text-md font-custom tracking-wide"
          onClick={goBack}
        >
          Back
        </button>
      </div>
      <h2 className="text-[5rem] tracking-widest font-custom text-brand-dark">{name}</h2>

      <div className="bg-brand-light w-full text-center">
        {image && (
          <div className="mt-4">
            <Image
              className="w-[25rem] h-[20rem] mx-auto rounded-md"
              src={image}
              height={400}
              width={400}
              alt="project-image"
            />
          </div>
        )}
        <p className="mt-4 max-w-[800px] text-zinc-200 tracking-widest mx-auto text-center font-custom pb-4">{longDescription}</p>
      </div>
      <div className="mt-4">
        {technology && Array.isArray(technology) && (
          <div className="flex flex-col">
            <div className="text-center mb-2">
              <p className="font-custom text-lg mt-4 text-brand-dark tracking-wide">Technology used</p>
            </div>
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
      <div>
        {(githubUrl || deployedUrl) && (
          <div className="flex flex-col">
            <div className="text-center mt-6 mb-2">
              <p className="font-custom text-lg text-brand-dark tracking-wide">View My Work</p>
            </div>
            <div className="flex flex-row">
              {githubUrl && (
                <a
                  className="border border-brand-dark px-10 mx-4 font-custom tracking-wider rounded-sm hover:text-brand-light bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {deployedUrl && (
                <a
                  className="border border-brand-dark px-10 mx-4 font-custom tracking-wide rounded-sm hover:text-brand-light bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
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
