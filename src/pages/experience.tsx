import { useRouter } from "next/router";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";

const Experience: React.FC<ProjectCardProps> = () => {
  const router = useRouter();

  const id = router.query.id as string;
  const name = router.query.name as string;
  const description = router.query.description as string;
  const image = router.query.image as string;
  const technology = router.query.technology as string[] | undefined; // Adjust type accordingly
  const href = router.query.href as string;

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-4">
      <div className="text-center">
        <h2 className="text-3xl font-custom">{name}</h2>
        {image && (
          <div className="mt-4">
            <Image
              className="w-[35rem] h-[20rem] mx-auto rounded-md"
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
        {/* Render technology icons if available */}
        {technology && Array.isArray(technology) && (
          <div className="flex flex-col">
            <div className="text-center">
              <p className="font-custom">Technology used</p>
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
    </div>
  );
};

export default Experience;
