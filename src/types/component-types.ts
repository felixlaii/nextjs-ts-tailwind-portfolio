import React, {ReactNode} from "react"

export interface NavigationLink {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

export interface DropdownLink {
  name: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavigationLink[];
  linkClassName: string;
  hoverClassName: string;
  activeLinkClassName: string;
  currentActiveLocation?: string;
  dropdownBgColor?: string;
  arrowColor?: string;
  dropdownBorderColor?: string;
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
  url: string;
  name: string;
  description: string;
  image: string;
  technology: string[];
}

export interface DarkModeContextProps {
  children: ReactNode;
}

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
export type FooterProps = Pick<HeaderProps, "navigationLinks" | "logo">;
