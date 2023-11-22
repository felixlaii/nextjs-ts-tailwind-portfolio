import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";
const WorkPage: React.FC<ProjectCardProps> = ({
  url,
  name,
  description,
  image,
  technology,
}) => {
  return (
    <div className="mt-[20rem]">
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        {technology.map((iconUrl, index) => (
          <Image
            key={index}
            src={iconUrl}
            alt={`tech-icon-${index}`}
            className="w-5 h-5"
          />
        ))}
      </div>
      <Image src={image} alt="Project Image" />
    </div>
  );
};

export default WorkPage;
