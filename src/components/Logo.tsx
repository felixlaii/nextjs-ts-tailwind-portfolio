import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const Logo = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <div className="relative">
      {isFadeIn ? (
        <Transition
          show={isFadeIn}
          enter="transition transform duration-1000"
          enterFrom="opacity-0 translate-x-[-50%]"
          enterTo="opacity-100 translate-x-0"
        >
          <div className="inline-block animate-spin">
            <Image
              src="/images/fl-trans-white.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
        </Transition>
      ) : null}
    </div>
  );
};

export default Logo;
