import Link from "next/link";
import Image from "next/image"
import { ProjectsData } from "../../data/projects-data";


const Projects: React.FC = () => {
    return (
        <div>
            <ul>
                {ProjectsData.map((project, index) => (
                    <li key={project.image}>
                        <div>
                            <Image width={100} height={100} src={project.image} alt="projects" />
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects;