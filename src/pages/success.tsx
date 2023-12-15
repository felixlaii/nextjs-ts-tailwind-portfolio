import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Success() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col min-h-screen pt-[5rem]">
      <div className="flex flex-row items-center mx-auto">
        <div className="align-middle">
          <FaArrowLeft
            className="h-10 w-5 cursor-pointer mr-5"
            onClick={goBack}
          />
        </div>
        <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 font-custom text-brand-dark">
          Lets Talk...
        </h1>
      </div>
      <div>
        <p className="text-[3rem] text-center text-brand-light font-custom tracking-widest">
          Your submission has been successful! Thank you for connecting, I will
          reach out as soon as possible!
        </p>
      </div>
    </div>
  );
}
