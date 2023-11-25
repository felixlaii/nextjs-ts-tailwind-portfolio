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

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[10rem]">
      <div className="text-center">
        <h2 className="text-[5rem] tracking-widest font-custom">{name}</h2>
        {image && (
          <div className="mt-4">
            <Image
              className="w-[25rem] h-[15rem] mx-auto rounded-md"
              src={image}
              height={400}
              width={400}
              alt="project-image"
            />
          </div>
        )}
        <p className="mt-4 font-custom">{description}</p>
      </div>
      <div className="mt-4">
        {technology && Array.isArray(technology) && (
          <div className="flex flex-col">
            <div className="text-center mb-2">
              <p className="font-custom text-brand-dark tracking-wide">Technology used</p>
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
              <p className="font-custom">Related Links</p>
            </div>
            <div className="flex flex-row">
              {githubUrl && (
                <a
                  className="border border-brand-dark px-10 mx-4 rounded-md text-md font-custom tracking-wide"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {deployedUrl && (
                <a
                  className="border border-brand-dark  px-10 mx-4 rounded-md text-md font-custom tracking-wide"
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
