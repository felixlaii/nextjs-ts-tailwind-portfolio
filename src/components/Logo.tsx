import { useEffect, useState } from "react";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spinOnce = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const SpinLogo = styled(Image)`
  animation-name: ${spinOnce};
  animation-duration: 1s;
  animation-timing-function: linear;
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
