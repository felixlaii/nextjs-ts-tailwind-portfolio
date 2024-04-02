import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Success() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[8rem] h-screen bg-brand-base">
      <div className="flex flex-row items-center">
        <div className="align-middle">
          <FaArrowLeft
            className="h-10 w-5 cursor-pointer mr-5"
            onClick={goBack}
          />
        </div>
        <div className="">
          <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest font-custom text-brand-darkMode">
            Lets Talk...
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <p className="text-[3rem] text-center text-brand-darkMode font-custom tracking-widest">
          Your submission has been successful! Thank you for connecting, I will
          reach out as soon as possible!
        </p>
      </div>
    </div>
  );
}
