import React, { PropsWithChildren } from "react";

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen overflow-y-hidden overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};
