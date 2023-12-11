import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

const PageTransition = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  
    useEffect(() => {
        const handler = () => {
            setTransitioning(true);
            setTimeout(() => {
                setTransitioning(false);
            }, 280);
        }
        router.events.on("routeChangeComplete", handler);
        return () => {
            router.events.off("routeChangeComplete", handler);
        }
    })

  return (
  <div></div>
  );
};

export default PageTransition;
