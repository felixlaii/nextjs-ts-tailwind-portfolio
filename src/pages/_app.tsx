import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
      {/* <AnimatePresence mode="wait">
            <motion.div key={router.pathname}> */}
                <Component {...pageProps} />
                {/* <motion.div
              className="absolute top-0 left-0 w-full h-screen transform bg-black origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
           <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              ></motion.div>
                 </motion.div>
      </AnimatePresence> */}
      </ProjectLayout>
   
    </>
  );
}
