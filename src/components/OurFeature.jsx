"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GreenRightIcon } from "./common/Icons";

const OurFeature = () => {
  const [activeTab, setActiveTab] = useState(3);
  const tabContent = [
    {
      title: "DNA-customized nutrition",
    },
    {
      title: "Fitness that fits you",
    },
    {
      title: "Mind matters",
    },
    {
      title: "Wellness, tracked and tailored",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative">
        <div className="xl:max-w-[1140px] xl:px-0 px-3 mx-auto container ">
          <div className="flex justify-center">
            <span className="text-center bg-mintcream text-green border-[1px] border-green px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
              OUR FEATURES
            </span>
          </div>
          <h2 className="pt-2 text-center md:text-[48px] sm:text-[40px] text-[32px] font-bold font-Roboto leading-[115%] text-black">
            Evexia Features: Revolutionize
            <span className="text-green">Your Wellness</span>
          </h2>
          <p className="pt-4 text-center text-gravel font-normal text-base leading-[150%] font-OpenSans">
            Your path to wellness, Tailored down to your DNA
          </p>

          <div className="sm:pt-[60px] pt-12 flex flex-wrap justify-center sm:gap-6 gap-4">
            {tabContent.map((tab, index) => (
              <div
                key={index}
                className=" bg-gradient-to-r rounded-lg from-jade to-petrol p-[1.5px] "
              >
                <button
                  className={` bg-white  rounded-lg pt-[18px] pb-[17px] w-[264px] flex justify-center items-center text-gradient-to-r from-white via-white to-green text-blue font-OpenSans font-semibold sm:text-base text-sm leading-[150%] ${
                    activeTab === index
                      ? "bg-features-tabs text-white border-transparent"
                      : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </button>
              </div>
            ))}
          </div>
          <div className="pt-10 flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center pb-32">
            <div className="lg:w-3/5">
              <p className="font-Roboto font-bold md:text-[48px] sm:text-[40px] text-[32px] leading-[155%] text-black">
                {tabContent[activeTab].title}
              </p>
              <div className="pt-4 flex gap-7">
                <span>
                  <GreenRightIcon />
                </span>
                <p className="max-w-[469px] font-normal font-OpenSans sm:text-base text-sm leading-[155%] text-liver">
                  Deep dive into your DNA: get to the heart of your health with
                  in-depth genomic insights
                </p>
              </div>
              <div className="pt-4 flex gap-7">
                <span>
                  <GreenRightIcon />
                </span>
                <p className="max-w-[469px] font-normal font-OpenSans sm:text-base text-sm leading-[155%] text-liver">
                  Beyond genetics: integrate comprehensive exam results for a
                  full health picture
                </p>
              </div>
              <div className="pt-4 flex gap-7">
                <span>
                  <GreenRightIcon />
                </span>
                <p className="max-w-[469px] font-normal font-OpenSans sm:text-base text-sm leading-[155%] text-liver">
                  Track, adjust, improve: dynamic tracking aligns your lifestyle
                  with your genetic blueprint for tangible wellness wins
                </p>
              </div>
              <div className="pt-4 flex gap-7">
                <span>
                  <GreenRightIcon />
                </span>
                <p className="max-w-[469px] font-normal font-OpenSans sm:text-base text-sm leading-[155%] text-liver">
                  See your health holistically: Evexia gives you a 360º view of
                  your wellness, integrating every health aspect into one
                  comprehensive roadmap
                </p>
              </div>
            </div>
            <div className="lg:w-2/5 relative z-30">
              <Image
                className="sm:ps-[69px] pt-2 md:w-[307px] xl:w-[376px] sm:w-[280px] w-[240px] lg:h-[498px] xl:h-[628px] h-[450px]"
                width={307}
                height={628}
                src="/assets/images/home-page/our-features/iphone.png"
                alt="iphone image"
              />
            </div>
          </div>
        </div>
        <Image
          className="absolute lg:bottom-[114px] bottom-[27px] right-0 xl:w-[660px] sm:w-[550px] w-[400px] sm:h-[600px] h-[500px] xl:h-[618px]"
          width={660}
          height={618}
          src="/assets/images/home-page/our-features/iphone_bg.png"
          alt="iphone bg image"
        />
      </div>
    </>
  );
};

export default OurFeature;
