import { ProjectCardProps } from "@/types/component-types";

const RichmondWestDental: React.FC<ProjectCardProps> = ({  url,
    name,
    description,
    image,
    technology,}) => {
    return (
        <div className="mt-[20rem]">
            <h2>
                {name}
            </h2>
            <p>hello world</p>
        </div>
    )
}

export default RichmondWestDental;