import { useParallax } from "react-scroll-parallax";

function ParallaxEffect() {
  //   const { ref: parallaxRef } = useParallax<HTMLDivElement>({ speed: 10 });
  const { ref: customParallaxRef } = useParallax<HTMLDivElement>({
    translateX: [0, 0, "easeOutQuint"],
    translateY: [100, 100, "easeInQuint"],
  });

  return <div ref={customParallaxRef}></div>;
}

export default ParallaxEffect;
