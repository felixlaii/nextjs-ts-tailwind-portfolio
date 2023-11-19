import React from "react";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { ProjectsData } from "../../data/projects-data";

// const images = [
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174707/logo_qh1koz.svg",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365211/pink_purple_zkqi27.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362504/Screenshot_2023-10-26_at_7.21.40_PM_kewmlp.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174855/stpatrick-logo_bd3mth.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698174362/pawfinder-static_pvnjkw.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362163/InStock-Logo_ewqhfc.svg",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698362108/BrainFlix-logo_bhkddt.svg",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365085/Screenshot_2023-10-26_at_8.04.40_PM_k1owj4.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698365068/Screenshot_2023-10-26_at_8.04.22_PM_tcwjjy.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698531550/weather-static_mjvjn6.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532305/pokemon-static_agigqy.png",
//     "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1698532351/connect-four-static_xiozcc.png",

// ]
// const imageClassName = "h-[50rem] w-full object-contain";
// const imagesItems = images.map((image, index) => (
//     <div   key={index}
//     >
//   <Image
//   key={index}
//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   <Image
//   key={index}

//     className={imageClassName}
//     src={image}
//     alt={`Image ${index + 1}`}    width={1100}
//     height={900}
//   />
//   </div>
// ));

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