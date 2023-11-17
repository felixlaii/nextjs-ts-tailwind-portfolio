import React from "react";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { ProjectsData } from "../../data/projects-data";

const Project = () => {
    return (
        <div className="mb-[20rem]">
    
        <main className="mt-[5rem] flex flex-col items-center justify-center text-center">
          <Carousel items={ProjectsData} />
        </main>
      </div>
    )
}

export default Project;