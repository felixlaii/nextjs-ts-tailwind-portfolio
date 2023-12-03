import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      var rootElement = document.documentElement;
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

      if (rootElement.scrollTop / scrollTotal > 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed float-right bottom-1/2 right-4 transform -translate-y-6 transition-opacity duration-300 ease-in-out cursor-pointer bg-brand-dark p-2 rounded-full`}
    >
      <FaArrowUp className="text-brand-base w-6 h-6" />
    </div>
  );
};

export default ScrollToTopButton;
