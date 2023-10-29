import { ProjectLayout } from "@/components/layout/ProjectLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
    <div>
      <Head>
        <title></title>
      </Head>
      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
    </div>
    </DarkModeProvider>
  );
}
