import { useState, useEffect } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-1 hover:scale-105 active:translate-y-0 cursor-pointer flex items-center justify-center ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <IoArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default ScrollToTop;
