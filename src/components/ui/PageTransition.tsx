import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

const PageTransition = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  return <div></div>;
};

export default PageTransition;
