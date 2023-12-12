import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ProjectLayout } from "@/components/layout/ProjectLayout";
import AOS from "aos";
import "@/styles/globals.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/images/logo-no-background.png" />
      </Head>

      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
    </>
  );
}
