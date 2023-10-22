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


export const Header: React.FC = () => {
  return <div></div>;
};
