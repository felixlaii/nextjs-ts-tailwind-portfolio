import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

export default function Success() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="min-h-screen flex pt-20 justify-center">
      <div className="text-center ml-5 mr-5">
        <h1 className="text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] tracking-widest pb-5 font-custom text-brand-dark">
          Lets Talk...
        </h1>
        <p className="text-[3rem] w-[calc(10% - 10px)] text-brand-light font-custom tracking-widest">
          Your submission has been successful! Thank you for connecting, I will
          reach out as soon as possible!
        </p>
      </div>
    </div>
  );
}
