import React from "react";
import NavBar from "./common/navBar/NavBar";
import CommonBtn from "./common/CommonBtn";
import CommonBtnWhite from "./common/CommonBtnWhite";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className=" relative z-50">
        <NavBar />
      </div>
      <div className=" bg-hero bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className=" container xl:max-w-[1140px] mx-auto px-3 xl:px-0 relative py-14 md:py-16 lg:pt-[83px]  lg:pb-[183px]">
          <span className="xl:block border-b hero-border-b w-full absolute bottom-0 hidden "></span>
          <div className=" flex flex-col-reverse lg:flex-row flex-wrap relative">
            <div className="lg:w-6/12 xl:w-7/12">
              <span className="inline-block text-center uppercase bg-mintcream text-green border-[1px] border-green px-[23.5px] py-[9px] text-base font-semibold font-OpenSans leading-[24px] rounded-[51px]">
                AI-POWERED GENOMICS
              </span>
              <h1 className=" max-w-[559px] font-Roboto font-bold text-black text-4xl md:text-5xl xl:text-8xl leading-[120%] mt-3">
                Unlock Your Health’s Full Potential With{" "}
                <span className=" text-green"> AI-Driven Genomics</span>
              </h1>
              <p className="mt-5 font-OpenSans font-normal text-sm sm:text-base text-black opacity-70 max-w-[522px]">
                Transform your life with your dna blueprint. Evexia turns the
                key to peak wellness, tailoring your health and fitness with
                precision only your genes can provide.
              </p>
              <div className=" mt-[40px] flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-[200px] sm:max-w-[unset]">
                <CommonBtn title="Explore Your DNA" />
                <CommonBtnWhite title="Learn More" />
              </div>
            </div>
            <div className="lg:w-6/12 xl:absolute right-[-3%] top-[-10%]">
              <Image
                className=" max-w-[300px] sm:max-w-[387px] mx-auto xl:max-w-[587px] xl:min-h-[628px]"
                sizes="100vw"
                width={587}
                height={628}
                src="/assets/images/home-page/hero/unlock_your.webp"
                alt="unlock-your"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
