"use client";
// Import necessary modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DropDwonArrow, HeaderCross, MainLogo, OpenNav } from "../common/Icons";
import MobileNav from "./MobileNav";
import { navLinks } from "../Helper";

// Define NavBar component
const NavBar = () => {
  // State variables for managing navigation overlay and toggle icon visibility
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);

  // Effect to handle body overflow and toggle icon visibility
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden"); // Disable vertical scroll when navigation overlay is active
      setIsToggleIconVisible(false); // Hide toggle icon when navigation overlay is active
    } else {
      document.body.classList.remove("overflow-y-hidden"); // Enable vertical scroll when navigation overlay is inactive
      setIsToggleIconVisible(true); // Show toggle icon when navigation overlay is inactive
    }
  }, [activeNavOverlay]);

  // Return JSX for NavBar component
  return (
    <>
      {/* Mobile navigation overlay */}
      <MobileNav
        activeNavOverlay={activeNavOverlay}
        setActiveNavOverlay={setActiveNavOverlay}
      />

      {/* Navigation bar */}
      <nav className="bg-black py-4">
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="mt-0">
              <Link href="#" className="w-full max-w-[150px] md:max-w-[210px]">
                <Image
                  width={185}
                  height={20}
                  src="/assets/images/"
                  alt="logo"
                />
              </Link>
            </div>
            {/* Navigation links */}

            <div className="hidden lg:flex gap-6">
              {navLinks.map((value, index) => {
                return (
                  <div key={index} className="relative">
                    <Link
                      href="#About"
                      className="font-Poppins group hover:stroke-inherit  transition-all ease-in-out duration-200 font-normal text-base text-white"
                    ></Link>
                  </div>
                );
              })}
            </div>
            {/* Button */}
            {/* Toggle button for mobile */}
            <div className="flex items-center lg:hidden relative z-[200] sm:me-0 ">
              <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
              <button
                onClick={() => setActiveNavOverlay(!activeNavOverlay)}
                type="button"
                className="inline-flex items-center justify-center rounded-md w-[33px]"
                aria-label="toggle-button"
              >
                {isToggleIconVisible ? <HeaderCross /> : <OpenNav />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Export NavBar component
export default NavBar;
