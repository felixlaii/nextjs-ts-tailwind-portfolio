import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingTransition from "@/components/ui/LoadingTransition";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined; // Declare a variable to hold the timer ID

    const handleStart = () => {
      // Start the timer when the route change starts
      timer = setTimeout(() => {
        setLoading(true);
      }, 5000); // Adjust the delay duration (in milliseconds) as needed
    };

    const handleComplete = () => {
      // Clear the timer when the route change completes
      clearTimeout(timer);
      setLoading(false);
    };

    // Ensure router exists before accessing its properties
    if (router) {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }

    // Cleanup: Clear the timer and remove event listeners
    return () => {
      clearTimeout(timer);
      if (router) {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      }
    };
  }, [router]);

  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/images/logo-no-background.png"/>
      </Head>
      <ProjectLayout>
        {loading && <LoadingTransition />}
        <Component {...pageProps} />
      </ProjectLayout>
    </div>
  );
}
