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
  href: string;
  icon: JSX.Element;
  hoverIcon: JSX.Element;
  name: string;
  information: string;
}
  export type FooterProps = Pick<HeaderProps, "navigationLinks" | "logo">;
