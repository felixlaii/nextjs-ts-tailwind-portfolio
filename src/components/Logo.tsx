import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spinOnce = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg)
  }
  to {
    opacity: 1;
    transform: rotate(360deg)
  }
`;

const SpinLogo = styled(Image)`
  animation: ${spinOnce} 1s spin;
`;

const Logo = () => {
  const [isSpinIn, setIsSpinIn] = useState(false);

  useEffect(() => {
    setIsSpinIn(true);
  }, []);

  return (
    <div>
      {isSpinIn ? (
        <SpinLogo
          src="/images/fl-trans-white.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
      ) : null}
    </div>
  );
};

export default Logo;
