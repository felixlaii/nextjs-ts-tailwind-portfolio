import React, { Fragment, useEffect, useRef, useState } from "react";
import { HeaderProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Button from "@/components/ui/inputs/Button";
import Logo from "../../Logo";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";


export function useOnClickOutside<T extends HTMLDivElement>(
  ref: React.RefObject<T>,
  handler: (e: any) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const LogoLink: React.FC<Pick<HeaderProps, "onLinkClick" | "logo" | "alt"> & {
  logoClassName? :string;
  showSidePanel?: boolean;
}
> = ({ onLinkClick, logoClassName }) => {
  return (
    <div>
            <Link
        href="/"
        className={clsx(
          "flex lg:inline-block w- relative",
          "focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent",

          logoClassName
        )}
        onClick={onLinkClick}
      >
        <Logo />
      </Link>
    </div>
  )
}

/**
 * Header navigation links rendered as React `NavLink` siblings encapsulated within a fragment.
 *
 * Each individual link (anchor tag) has the given `linkClassName` applied as its className and the
 * optional `onLinkClick` set as its `onClick` handler.
 */
const MenuLinks: React.FC<Pick<HeaderProps, | "navigationLinks"
| "currentActiveLocation"
| "activeLinkClassName"
| "linkClassName"
| "hoverClassName"
| "onLinkClick"
| "textClassName"
> & { onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void } > = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  linkClassName,
  onLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link
            href={link.href}
            className={clsx(
              currentActiveLocation?.includes(link.href)
                ? activeLinkClassName
                : linkClassName,
              hoverClassName,
              textClassName,
              "text-center lg:text-left border-b-[1px] font-light py-[0.75rem]",
              "flex flex-col"
            )}
            onClick={onLinkClick} >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const DesktopNavBar: React.FC<Pick< HeaderProps,     | "onLinkClick"
| "navigationLinks"
| "linkClassName"
| "hoverClassName"
| "arrowColor"
| "dropdownBgColor"
| "activeLinkClassName"
| "currentActiveLocation"
| "textClassName"
>
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  arrowColor,
  dropdownBgColor,
  linkClassName,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [dropdownVariant, setDropdownVariant] = useState<string>("");
  const ref = useRef(null);
  const isShowing = isClick || isHover;
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });
  return (
    <div>
      
    </div>
  )
}

export const Header: React.FC = () => {
  return <div></div>;
};
