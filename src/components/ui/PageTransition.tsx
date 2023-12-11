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
    })

  return (
  <div></div>
  );
};

export default PageTransition;
