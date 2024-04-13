"use client";
import { useEffect, useState } from "react";
import { BacktoTopArrow } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // BACK TO TOP SCROLL FUNCTION
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bg-tealBlue bottom-[3%] transition-all duration-300 ease-linear hover:opacity-80 group end-3 z-50 w-9 md:h-11 h-9 md:w-11 flex items-center justify-center cursor-pointer rounded-full  ${
        scrollPosition > 200 ? "scale-100 " : " scale-0"
      }`}
      onClick={() => scrollToTop()}
    >
      <BacktoTopArrow />
    </div>
  );
};

export default BackToTop;
