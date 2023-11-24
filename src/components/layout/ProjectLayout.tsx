import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";

import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import logo from "../../../public/images/blue-logo-1.png";
import { HeaderProps } from "@/types/component-types";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { useState } from "react";
import { PROJECTS_PAGE } from "../../../data/projects-data";

/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = (
  { children },
  props
) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const location = useRouter();
  const navigationLinks: Array<NavigationLink> = [
    { name: "HOME", href: "/" },
    { name: "EXPERTISE", href: "#expertise" },
    {
      name: "WORK",
      href: "#work",
    },
    { name: "CONTACT", href: "#contact" },
  ];
  return (
    <DarkModeProvider
      initialIsDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <div>
        <Wrapper isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
          <Header
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            logo={logo.src}
            navigationLinks={navigationLinks}
            currentActiveLocation={location.pathname}
            textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-400"
            linkClassName="flex bg-left-bottom lg:text-md"
            logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 ml-2 mt-2 mr-1"
            hoverClassName={clsx(
              "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            )}
            activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
          />
          <Content isDarkMode={isDarkMode}>
            {children}
          </Content>
          <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Wrapper>
      </div>
    </DarkModeProvider>
  );
};
