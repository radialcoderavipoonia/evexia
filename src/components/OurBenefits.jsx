import Image from "next/image";
import React from "react";
import { benefits } from "./common/Helper";

const OurBenefits = () => {
  return (
    <div className="xl:max-w-[1140px] xl:px-0 px-3 container md:py-[120px] sm:py-24 py-20 mx-auto">
      <div className="flex justify-center">
        <span className="text-center bg-[#E5F4EF] text-[#27AA7E] border-[1px] border-[#27AA7E] px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
          OUR BENEFITS
        </span>
      </div>
      <h2 className="pt-[6px] text-center md:text-[48px] sm:text-[40px] text-[32px] font-bold font-Roboto leading-[115%] text-black">
        Evexia Benefits: Tailored{" "}
        <span className="text-[#27AA7E]">Wellness Unlocked</span>
      </h2>
      <div className="sm:pt-[60px] pt-12 flex md:flex-row flex-col gap-6 justify-between items-center">
        <div className="md:w-1/2 sm:w-[90%] w-full me-2">
          {benefits.map((tab, index) => {
            return (
              <div
                key={index}
                className={`rounded-lg border-[1px] border-[#208966] py-[11px] px-5 flex items-center w-full ${
                  index === 0
                    ? "bg-benefits-tabs mt-0"
                    : "bg-transparent sm:mt-6 mt-4"
                }`}
              >
                <span>{tab.icons}</span>
                <p
                  className={`ps-5 font-Roboto font-semibold sm:text-xl text-base leading-[150%]  ${
                    index === 0 ? "text-white" : "text-black"
                  }`}
                >
                  {tab.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg bg-[#E5F4EF] sm:p-6 p-4 md:w-1/2 sm:w-[90%] w-full">
          <Image
            className=""
            width={510}
            height={275}
            src="/assets/images/our-benefits/dna_checking.png"
            alt="dna checking image"
          />
          <div className="pt-5">
            <p className="font-Roboto font-semibold text-base leading-[150%] text-black">
              1. Customized to Your DNA
            </p>
            <p className="pt-[10px] max-w-[498px] font-OpenSans font-normal text-base leading-[150%] text[#474B4A]">
              Blueprint for thriving: say goodbye to guesswork. Evexia crafts
              your wellness plan with the precision of your own genetics.
              Unique, like you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
