import React from "react";
import { aboutUs } from "./common/Helper";
import { WhoYou } from "./common/Icons";

const WhoWeAre = () => {
  return (
    <div className=" relative">
      <div className=" absolute right-10 bottom-[10%] hidden lg:block">
        <WhoYou />
      </div>
      <div className="xl:max-w-[1140px] xl:px-0 px-3 container mx-auto py-14 sm:py-16 md:py-20  lg:py-[120px]">
        <div className="flex justify-center flex-col items-center">
          <span className="text-center bg-mintcream text-green border-[1px] border-green px-[23.5px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            ABOUT US
          </span>
          <h2 className="pt-2 text-center md:text-7xl sm:text-5xl text-3xl font-bold font-Roboto leading-[115%] text-black">
            Who
            <span className="text-green">We Are</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center sm:mt-9 mt-6">
          {aboutUs.map((value, index) => (
            <div key={index} className="md:w-6/12 lg:w-5/12 xl:w-4/12 mt-6">
              <div className=" w-full max-w-[500px] xl:max-w-[364px] md:min-h-[400px] lg:min-h-[466px] px-3 xl:px-0 overflow-hidden rounded-[20px]">
                <div className="relative bg-about-us border border-cornflowerblue xl:max-w-[364px] md:min-h-[400px] lg:min-h-[466px] rounded-2xl p-6 hover:scale-105 duration-300 transition-all ease-in-out">
                  <div className="relative z-10 bg-blue w-[64px] h-[64px] flex justify-center items-center border border-lightWhite rounded-[1000px]">
                    {value.icon}
                  </div>
                  <span className="absolute w-full block border border-card-border left-0 top-[12.2%]"></span>
                  <h3 className="font-OpenSans font-semibold text-xl leading-8 text-black mt-6">
                    {value.title}
                  </h3>
                  <p className="font-OpenSans text-base md:text-sm lg:text-base leading-[120%] text-black opacity-70 mt-3">
                    {value.deception}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
