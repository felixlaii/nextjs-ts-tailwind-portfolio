import { ProjectCardProps } from "@/types/component-types";
import Image from "next/image";
import { ProjectsData } from "../../data/projects-data";
const Expertise: React.FC<ProjectCardProps> = ({
  url,
  name,
  description,
  image,
  technology,
  href,
  id,
}) => {


  return (
    <div className="mt-[20rem]">
      {ProjectsData.map((project, index) => (
        <div key={project.id}>
  <h2>{name}</h2>
        <p>{description}</p>
        </div>
      ))}
      <span> 
        {/* <div>
        {technology.map((iconUrl, index) => (
          <Image
            key={index}
            src={iconUrl}
            alt={`tech-icon-${index}`}
            className="w-5 h-5"
          />
        ))}
      </div> */}
        {/* <Image src={image} height={40} width={40} alt="Project Image" /> */}
      </span>
    </div>
  );
};

export default Expertise;
