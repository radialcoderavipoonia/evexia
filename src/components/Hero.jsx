import React from "react";
import NavBar from "./common/navBar/NavBar";
import CommonBtn from "./common/CommonBtn";

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className=" bg-hero bg-no-repeat bg-cover pt-8">
        <div className=" container xl:max-w-[1140px] mx-auto px-3 xl:px-0 ">
          <div className=" flex flex-wrap">
            <div className=" w-7/12">
              <h1 className=" max-w-[595px] font-Roboto font-bold text-black text-4xl md:text-5xl lg:text-[58px] lg:leading-[69px]">
                Unlock Your Health’s Full Potential With{" "}
                <span className=" text-green"> AI-Driven Genomics</span>
              </h1>
              <p className=" font-OpenSans font-normal text-base text-black opacity-70 max-w-[522px]">
                Transform your life with your dna blueprint. Evexia turns the
                key to peak wellness, tailoring your health and fitness with
                precision only your genes can provide.
              </p>
              <div className=" mt-[40px]">
                <CommonBtn title="Explore Your DNA" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
