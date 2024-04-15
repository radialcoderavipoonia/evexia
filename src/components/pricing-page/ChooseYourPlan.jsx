"use client";
import React from "react";
import { yourPlan } from "../common/Helper";

const ChooseYourPlan = () => {
  return (
    <div className="bg-choosePlan bg-cover bg-no-repeat pt-24 pb-20">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0">
        <div className="flex justify-center">
          <span className="text-center md:mt-4 bg-[#E5F4EF] text-[#27AA7E] border-[1px] border-[#27AA7E] px-6 py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="pt-[6px] text-center md:text-[48px] sm:text-[40px] text-[32px] font-bold font-Roboto leading-[115%] text-white">
          Choose Your Plan
        </h2>
        <p className="font-OpenSans font-normal text-sm sm:text-base text-white max-w-[864px] mx-auto text-center mt-4">
          At Evexia, we believe in empowering you with choices that fit your
          wellness journey. That’s why we’re introducing tiered plans that cater
          to your unique needs and preferences. From AI-driven guidance to fully
          personalized wellness plans based on your genomic data, there’s a path
          for everyone
        </p>
        <div className=" flex flex-wrap mt-5">
          {yourPlan.map((value, index) => (
            <div key={index} className=" sm:w-6/12 xl:w-3/12 mt-5 px-3 lg:px-0">
              <div className=" sm:min-h-[437px] lg:max-w-[480px] xl:max-w-[267px] xl:min-h-[437px] border border-white rounded-[14px] p-5 group text-center hover:bg-white transition-all duration-200 ease-in-out">
                <p className=" font-Roboto font-semibold text-2xl text-white group-hover:text-black transition-all duration-200 ease-in-out">
                  {value.plan}
                </p>
                <p className="mt-4 font-OpenSans text-[42px] font-semibold leading-8 text-white group-hover:text-blue transition-all duration-200 ease-in-out">
                  {value.title}{" "}
                  <span className=" font-OpenSans text-base  group-hover:text-black transition-all duration-200 ease-in-out ">
                    {value.month}
                  </span>
                </p>
                <p className="mt-4 font-OpenSans text-xl text-white  group-hover:text-black transition-all duration-200 ease-in-out ">
                  {value.price}
                </p>
                <p className="mt-5 font-OpenSans text-base text-white group-hover:text-black transition-all duration-200 ease-in-out ">
                  <span className=" font-bold">{value.descriptionto}</span>
                  {value.description}
                </p>
                <p className="mt-5 max-w-[224px] mx-auto font-OpenSans text-sm text-white group-hover:text-black transition-all duration-200 ease-in-out ">
                  {value.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
