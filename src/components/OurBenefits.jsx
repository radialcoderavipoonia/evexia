import Image from "next/image";
import React from "react";
import { benefits } from "./common/Helper";

const OurBenefits = () => {
  return (
    <div className="xl:max-w-[1140px] xl:px-0 px-3 container py-[120px] mx-auto">
      <div className="flex justify-center">
        <span className="text-center bg-[#E5F4EF] text-[#27AA7E] border-[1px] border-[#27AA7E] px-[30px] py-[10px] text-base font-semibold font-OpenSans leading-[24px] rounded-[51px]">
          OUR BENEFITS
        </span>
      </div>
      <h2 className="pt-[6px] text-center text-[48px] font-bold font-Roboto leading-[57.6px] text-black">
        Evexia Benefits: Tailored{" "}
        <span className="text-[#27AA7E]">Wellness Unlocked</span>
      </h2>
      <div className="pt-[60px] flex md:flex-row flex-col gap-6 justify-between items-center">
        <div className="md:w-1/2 sm:w-[90%] w-full me-2">
          {benefits.map((tab, index) => {
            return (
              <div
                key={index}
                className={`rounded-lg border-[1px] border-[#208966] py-[11px] px-5 flex items-center w-full ${
                  index === 0 ? "bg-benefits-tabs mt-0" : "bg-transparent mt-6"
                }`}
              >
                <span>{tab.icons}</span>
                <p
                  className={`ps-5 font-Roboto font-semibold text-xl leading-[30px]  ${
                    index === 0 ? "text-white" : "text-black"
                  }`}
                >
                  {tab.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg bg-[#E5F4EF] p-6 md:w-1/2 sm:w-[90%] w-full">
          <Image
            className=""
            width={510}
            height={275}
            src="/assets/images/our-benefits/dna_checking.png"
            alt="dna checking image"
          />
          <div className="pt-5">
            <p className="font-Roboto font-semibold text-base leading-[24px] text-black">
              1. Customized to Your DNA
            </p>
            <p className="pt-[10px] max-w-[498px] font-OpenSans font-normal text-base leading-[25.6px] text[#474B4A]">
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
