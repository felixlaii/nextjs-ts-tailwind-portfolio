import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import { Header } from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import { useRouter } from "next/router";
import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";



/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = ({ children }, props ) => {
  const location = useRouter();
  const navigationLinks: Array<NavigationLink> = [
    { name: "ABOUT", href: "/about" },
    {
      name: "PROJECTS",
      href: "/projects",
    },
    { name: "SKILLS", href: "/skills" },
    // { name: "GALLERY", href: "#", dropdown: GALLERY_DROPDOWN },
    // { name: "CONTACT US", href: "/contact-us" },
  ];
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
