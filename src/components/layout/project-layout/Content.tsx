import type { PropsWithChildren } from "react";
import clsx from "clsx";

export interface ContentProps {
  containerPaddingStyle?: string;
  extraClassName?: string;
  isDarkMode: boolean;
}

/**
 * Content wrapper of ProjectLayout that sets responsive max widths, padding, etc. and renders its
 * children inside of a `<main>..</main>` block.
 */
export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  extraClassName,
  children,
  isDarkMode,
}) => {
  return (
    <main
      className={clsx(
        `flex-1 w-screen ${
          isDarkMode ? "bg-brand-light text-white " : "bg-brand-base text-black"
        } `,
        extraClassName
      )}
    >
      {children}
    </main>
  );
};
