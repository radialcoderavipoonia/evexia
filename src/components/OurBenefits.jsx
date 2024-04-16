"use client";
import Image from "next/image";
import React, { useState } from "react";
import { benefits } from "./common/Helper";

const OurBenefits = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div id="benefits" className="xl:max-w-[1140px] xl:px-0 px-3 container lg:pb-[106px] lg:pt-[120px] sm:py-24 py-20 mx-auto">
      <div className="flex justify-center">
        <span className="text-center bg-mintcream text-green border-[1px] border-green px-[29.2px] py-[9.2px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
          OUR BENEFITS
        </span>
      </div>
      <h2 className="pt-[6px] text-center md:text-7xl sm:text-5xl text-3xl font-bold font-Roboto leading-[115%] text-black">
        Evexia Benefits: Tailored{" "}
        <span className="text-green">Wellness Unlocked</span>
      </h2>
      <div className="sm:pt-[60px] pt-12 flex md:flex-row flex-col gap-6 justify-between items-start">
        <div className="md:w-1/2 sm:w-[90%] w-full">
          {benefits.map((tab, index) => (
            <div
              key={index}
              className={`rounded-lg border-[1px] border-eucalyptus py-[11px] px-5 flex items-center w-full sm:mb-6 mb-4 ${
                index === activeTab ? "bg-benefits-tabs " : "bg-transparent "
              }`}
              onClick={() => handleTabClick(index)}
            >
              <span
                className={` ${
                  index === activeTab ? "svg_color_changed" : "svg_default"
                }`}
              >
                {tab.icons}
              </span>
              <p
                className={`ps-5 font-Roboto font-semibold sm:text-xl text-base leading-[150%]  ${
                  index === activeTab ? "text-white" : "text-black"
                }`}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 sm:w-[90%] w-full h-full">
          {benefits.map((tab, index) => (
            <div
              key={index}
              className={`rounded-lg bg-mintcream sm:p-6 p-4 h-full ${
                index === activeTab ? "" : "hidden"
              }`}
            >
              <Image
                className=""
                width={510}
                height={275}
                src={`/assets/images/home-page/our-benefits/${tab.imageName}.webp`}
                alt={`${tab.title} image`}
              />
              <div className="pt-5">
                <p className="font-Roboto font-semibold text-base leading-[150%] text-black">
                  {index + 1}. {tab.title}
                </p>
                <p className="pt-[10px] max-w-[498px] font-OpenSans font-normal text-base leading-[150%] text-blackcow">
                 {tab.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
