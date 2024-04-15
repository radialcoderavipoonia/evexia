import React from "react";

import Image from "next/image";
import NavBar from "../common/navBar/NavBar";
import CommonBtn from "../common/CommonBtn";
import CommonInput from "../common/CommonInput";

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
              <h1 className=" capitalize max-w-[598px] font-Roboto font-bold text-black text-4xl md:text-5xl xl:text-[58px] xl:leading-[69px] mt-3">
                Welcome To The Future Of Personalized Wellness:{" "}
                <span className=" text-green">
                  Evexia's <br /> Pre-Launch Invitation
                </span>
              </h1>
              <p className=" capitalize font-OpenSans font-bold text-xl text-blue my-4">
                embark on a journey tailored just for you
              </p>
              <p className=" font-OpenSans font-normal text-sm sm:text-base text-black opacity-70 max-w-[667px]">
                You're on the brink of transforming how you approach health and
                wellness. evexia is not just an app; it's a movement towards
                truly personalized health care, grounded in your unique genetic
                makeup. as we gear up for our exciting launch, we invite you to
                be among the first to experience the power of living in harmony
                with your dna.
              </p>
              <div className=" mt-[40px] flex border border-blue rounded-md max-w-[568px] justify-between">
                <CommonInput
                  type="email"
                  placeholder="Enter Your Email address"
                />
                <CommonBtn title="Sign Up" />
              </div>
              <a
                href="#"
                className="font-OpenSans italic text-sm text-blue block mt-[13px]"
              >
                Sign up now to get notified when we launch{" "}
              </a>
            </div>
            <div className="lg:w-6/12 xl:absolute right-[-3%] top-[-12%]">
              <Image
                className=" max-w-[300px] sm:max-w-[387px] mx-auto lg:max-w-[500px] lg:min-h-[500px] xl:max-w-[607px] xl:min-h-[601px]"
                sizes="100vw"
                width={607}
                height={601}
                src="/assets/images/pricing-page/hero/pricing-hero.webp"
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
