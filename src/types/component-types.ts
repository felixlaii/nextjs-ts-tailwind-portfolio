import React, { ReactNode } from "react";

export interface NavigationLink {
  name: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavigationLink[];
  linkClassName: string;
  hoverClassName: string;
  activeLinkClassName: string;
  currentActiveLocation?: string;
  textClassName?: string;
  companyName?: string;
  companyNameClassName?: string;
  logo: string;
  logoClassName?: string;
  alt?: string;
  onLinkClick?: () => void;
}

export interface ButtonProps {
  id?: string;
  type: "button" | "submit";
  extraClassName?: string;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  technology: string[];
  githubUrl?: string;
  deployedUrl?: string;
  videoCarousel?: string[];
  id: string;
  longDescription: string;
  carousel?: string[];
  onClick: () => void;
  index: number;
}

export interface DarkModeContextProps {
  children: ReactNode;
}

export interface ContentProps {
  children: ReactNode;
  className?: string;
}

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export type FooterProps = Pick<HeaderProps, "navigationLinks" | "logo">;
