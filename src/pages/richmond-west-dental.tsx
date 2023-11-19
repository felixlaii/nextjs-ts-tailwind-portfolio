import { ProjectCardProps } from "@/types/component-types";

const RichmondWestDental: React.FC<ProjectCardProps> = ({  url,
    name,
    description,
    image,
    technology,}) => {
    return (
        <div>
            <h2>
                {name}
            </h2>
        </div>
    )
}

export default RichmondWestDental;