import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import logo from "../../../public/images/felixlaii-logo.svg";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { useState } from "react";
import ScrollToTopButton from "../ui/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";


export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const location = useRouter();
  const navigationLinks: Array<NavigationLink> = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/#about" },
    { name: "EXPERTISE", href: "/#expertise" },
    { name: "EXPERIENCE", href: "/#experience" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (

    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <Wrapper isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          logo={logo.src}
          navigationLinks={navigationLinks}
          currentActiveLocation={location.pathname}
          textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-400"
          linkClassName="flex bg-left-bottom lg:text-md"
          logoClassName="w-full sm:w-3/5 md:w-3/4 ml-2 mt-2 mr-1"
          hoverClassName={clsx(
            "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          )}
          activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
        />
        <Content isDarkMode={isDarkMode}>{children}</Content>
        <ScrollToTopButton isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </Wrapper>
    </DarkModeProvider>

  );
};
