import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/images/logo-no-background.png"/>
      </Head>
      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
    </div>
  );
}
