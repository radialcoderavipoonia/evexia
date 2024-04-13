"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../Helper";
import CommonBtn from "../CommonBtn";

// Define MobileNav component
const MobileNav = ({ activeNavOverlay, setActiveNavOverlay }) => {
  // Effect to handle overflow and remove listener when component unmounts
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023.98px)");

    // Function to handle screen size change
    function handleScreenSizeChange(event) {
      if (event.matches) {
        if (activeNavOverlay) {
          document.body.classList.add("overflow-y-hidden");
        } else {
          document.body.classList.remove("overflow-y-hidden");
        }
      } else {
        document.body.classList.remove("overflow-y-hidden");
      }
    }

    // Add listener and call handler
    mediaQuery.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);

    // Cleanup function to remove listener
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, [activeNavOverlay]);

  // State for controlling open/close state of mobile nav items
  const [open, setOpen] = useState();

  // Function to handle opening/closing of mobile nav items
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // Return JSX for MobileNav component
  return (
    <>
      {/* Mobile navigation overlay */}
      <div
        className={`mobile-nav-overlay md:pt-[7.5rem] ${
          activeNavOverlay ? "left-0" : "-left-full"
        }`}
      >
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col text-white gap-9 xl:gap-5 justify-center items-center w-full">
            {navLinks.map((value, index) => {
              return (
                <div key={index} className="relative">
                  <Link
                    href={value.path}
                    className="font-OpenSans hover:text-green transition-all ease-in-out duration-200 font-normal text-base text-black"
                  >
                    {value.title}
                  </Link>
                </div>
              );
            })}
            <div className="">
              <CommonBtn title="Download Now" />
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div
        className={`absolute lg:hidden top-0 left-0 w-full h-full bg-darkBlack lg:bg-transparent backdrop-sepia-[12px z-50 ${
          activeNavOverlay
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveNavOverlay(false)}
      ></div>
    </>
  );
};

// Export MobileNav component
export default MobileNav;
