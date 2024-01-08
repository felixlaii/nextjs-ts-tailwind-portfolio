import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const Logo = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <div>
      {isFadeIn ? (
        <Transition
          show={isFadeIn}
          enter="transition transform duration-1000"
          enterFrom="opacity-0 translate-x-[-50%]"
          enterTo="opacity-100 translate-x-0"
        >
          <Image
            src="/images/fl-trans-white.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Transition>
      ) : null}
    </div>
  );
};

export default Logo;
