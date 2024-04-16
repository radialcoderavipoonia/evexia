import React from "react";
import { aboutUs } from "./common/Helper";
import { WhoYou } from "./common/Icons";

const WhoWeAre = () => {
  return (
    <div id="aboutus" className=" relative">
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
            <span className="text-green"> We Are </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center sm:mt-9 mt-6">
          {aboutUs.map((value, index) => (
            <div
              key={index}
              className="md:w-6/12 lg:w-5/12 xl:w-4/12 mt-6 px-3 xl:px-0"
            >
              <div className=" bg-about-us border border-[#B9D2E1] xl:max-w-[364px] md:min-h-[400px] lg:min-h-[466px] rounded-2xl p-6 hover:scale-95 duration-300 transition-all ease-in-out relative overflow-hidden">
                <div className="h-[1px] bg-[#B3CBC5] end-0 absolute md:top-[12%] sm:top-[21%] top-[18%] md:w-[80%] w-[90%]"></div>
                <div className="h-[10%] bg-[#B3CBC5] md:start-[15%] sm:start-[9%] start-[14%] absolute top-0 w-[1px]"></div>
                <div className="relative z-10 bg-blue w-[64px] h-[64px] flex justify-center items-center border border-lightWhite rounded-[1000px] shadow-[0px_0px_20px_0px_rgba(255,_255,_255,_0.05)]">
                  {value.icon}
                </div>

                <h3 className="font-OpenSans font-semibold text-xl leading-8 text-black mt-6">
                  {value.title}
                </h3>
                <p className="font-OpenSans text-base md:text-sm lg:text-base leading-[120%] text-black opacity-70 mt-3">
                  {value.deception}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
