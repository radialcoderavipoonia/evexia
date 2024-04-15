import React from "react";
import CommonBtnWhite from "./CommonBtnWhite";
import Image from "next/image";

const CommonSection = (props) => {
  return (
    <div className="md:mx-0 mx-3">
      <div className="container xl:max-w-[994px] mx-auto  bg-commonSection bg-no-repeat bg-cover rounded-[20px]">
        <div className="p-5 sm:p-8 lg:px-[60px] lg:py-[61px]">
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between ">
            <div className=" mt-5 md:mt-0 text-center md:text-start">
              <h2 className=" font-Roboto text-3xl sm:text-4xl font-semibold text-white">
                {props.title}
              </h2>
              <p className="font-OpenSans text-sm sm:text-base text-white opacity-70 mt-2 sm:mt-4 max-w-[452px] mx-auto md:mx-0">
                {props.decoration}
              </p>
              <div className=" mt-6 flex justify-center md:justify-start">
                <CommonBtnWhite title={props.btnTitle} />
              </div>
            </div>
            <div>
              <Image
                className=" w-full max-w-[400px] mx-auto lg:max-w-[309px]"
                sizes="100vw"
                width={309}
                height={262}
                src={props.imgSrc}
                alt="unlock-your"
              />
            </div>
          </div>
          <p className="font-OpenSans text-sm italic xl:whitespace-nowrap text-white opacity-90 mt-[30px] text-center underline">
            {props.shortDecoration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
