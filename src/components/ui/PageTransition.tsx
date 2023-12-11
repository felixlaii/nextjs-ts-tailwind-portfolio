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
    }, [router.events])

    const Loading = () => <div className="container mx-auto">Loading...</div>;

    const Screen = !transitioning ? Component : Loading;

  return (
  <div></div>
  );
};

export default PageTransition;
