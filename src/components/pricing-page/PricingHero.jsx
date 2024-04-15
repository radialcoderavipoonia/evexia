import React from "react";

import Image from "next/image";
import NavBar from "../common/navBar/NavBar";
import CommonBtn from "../common/CommonBtn";
import CommonBtnWhite from "../common/CommonBtnWhite";

const PricingHero = () => {
  return (
    <div>
      <div className=" relative z-50">
        <NavBar />
      </div>
      <div className=" bg-hero bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className=" container xl:max-w-[1140px] mx-auto px-3 xl:px-0 relative py-14 md:py-16 lg:pt-[83px] lg:pb-[183px]">
          <span className="xl:block border-b hero-border-b w-full absolute bottom-0 hidden "></span>
          <div className=" flex flex-col-reverse lg:flex-row flex-wrap relative">
            <div className="lg:w-6/12 xl:w-7/12">
              <span className="inline-block text-center uppercase bg-[#E5F4EF] text-[#27AA7E] border-[1px] border-[#27AA7E] px-6 py-[10px] text-base font-semibold font-OpenSans leading-[24px] rounded-[51px]">
                AI-POWERED GENOMICS
              </span>
              <h1 className=" max-w-[595px] font-Roboto font-bold text-black text-4xl md:text-5xl xl:text-[58px] xl:leading-[69px] mt-3">
                Unlock Your Health’s Full Potential With{" "}
                <span className=" text-green"> AI-Driven Genomics</span>
              </h1>
              <p className=" font-OpenSans font-normal text-sm sm:text-base text-black opacity-70 max-w-[522px]">
                Transform your life with your dna blueprint. Evexia turns the
                key to peak wellness, tailoring your health and fitness with
                precision only your genes can provide.
              </p>
              <div className=" mt-[40px] flex gap-6">
                <CommonBtn title="Explore Your DNA" />
                <CommonBtnWhite title="Learn More" />
              </div>
            </div>
            <div className="lg:w-6/12 xl:absolute right-[-8%] top-[-10%]">
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

export default PricingHero;
