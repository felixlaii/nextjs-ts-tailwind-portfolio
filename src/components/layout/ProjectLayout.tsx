import { useState } from "react";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { NavigationLink } from "@/types/component-types";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import logo from "../../../public/images/felixlaii-logo.svg";
import ScrollToTopButton from "../ui/ScrollToTop";

export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const location = useRouter();

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
      <AnimatePresence mode="wait">
        <motion.div>
          <Wrapper>
            <Header
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
            <motion.div
              className="absolute top-0 left-0 w-full h-screen transform bg-brand-dark origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-screen transform bg-brand-dark origin-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          </Wrapper>
        </motion.div>
      </AnimatePresence>
    </DarkModeProvider>
  );
};
