import React from "react";
import Image from "next/image";
import Carousel from "./ui/Carousel";

const images = [
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031905/drinks-image-01_vkxvvb.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031907/drinks-image-09_rtjuiq.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-04_smj88a.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-05_q1gcqz.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-02_imcrqe.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031904/drinks-image-03_hcoy45.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-08_in0xrw.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-06_kfqotc.jpg",
  "https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687031903/drinks-image-07_zqmuc3.jpg",
];

const imageClassName = "h-[30rem] object-contain";
const imagesItems = images.flatMap((imageUrl, index) => [
  <Image
    className={imageClassName}
    key={`${index}-1`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-2`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-3`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-4`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-5`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-6`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-7`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-8`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
  <Image
    className={imageClassName}
    key={`${index}-9`}
    src={imageUrl}
    alt={`Image ${index + 1}`}
    width={100}
    height={100}
  />,
]);

const ExperienceCarousel = () => {
    return (
      <div className="mb-[20rem]">
        <section className="mt-[2rem]">
          <div className="bg-brand-light">
            <Carousel items={imagesItems} />
          </div>
        </section>
      </div>
    );
  };
  
  export default ExperienceCarousel;
