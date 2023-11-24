import { useRouter } from "next/router";
import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";

const Experience: React.FC<ProjectCardProps> = () => {
  const router = useRouter();

  // Retrieve project details from query parameters with type assertions
  const id = router.query.id as string;
  const name = router.query.name as string;
  const description = router.query.description as string;
  const image = router.query.image as string;
  const technology = router.query.technology as string[] | undefined; // Adjust type accordingly
  const href = router.query.href as string;
  return (
    <div className="pt-[10rem]">
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        {/* Render technology icons if available */}
        {technology && Array.isArray(technology) && (
          <div>
            {technology.map((iconUrl: string, index: number) => (
              <Image
                key={index}
                src={iconUrl}
                alt={`tech-icon-${index}`}
                height={40}
                width={40}
                className="w-5 h-5"
              />
            ))}
          </div>
        )}
      </div>
      <span>
        <Image src={image} height={40} width={40} alt="Project Image" />
      </span>
    </div>
  );
};

export default Experience;
