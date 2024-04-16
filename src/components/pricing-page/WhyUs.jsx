import React from "react";
import { GreenRightIcon } from "../common/Icons";
import Image from "next/image";
import CommonInput from "../common/CommonInput";
import CommonBtn from "../common/CommonBtn";

const WhyUs = () => {
  return (
    <div className="py-14 sm:py-16 md:py-20 lg:py-[120px] xl:max-w-[1140px] xl:px-0 px-3 container mx-auto relative z-30">
      <div className="flex justify-center">
        <span className="text-center bg-mintcream text-green border-[1px] border-green px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
          WHY US?
        </span>
      </div>
      <h2 className="pt-[6px] text-center md:text-7xl sm:text-5xl text-3xl font-bold font-Roboto leading-[115%] text-black">
        Why join
        <span className="text-green">our pre-launch?</span>
      </h2>
      <p className="pt-4 text-center max-w-[792px] mx-auto font-OpenSans font-normal text-base leading-[150%] text-liver">
        By signing up today, you’ll gain early access to our revolutionary
        platform, designed to empower your wellness journey like never before.
        This is your chance to be at the forefront of personalized health, with
        tools and insights tailored specifically to you
      </p>
      <div className="mt-4 flex sm:flex-row flex-col justify-between mx-auto max-w-[494px] w-full border border-blue rounded-md">
        <CommonInput type="email" placeholder="Get Rewarded for Referrals" />
        <CommonBtn title="Refer Now" />
      </div>
      <div className="lg:pt-[90px] sm:pt-[60px] pt-12  relative">
        <div className="flex justify-between">
          <div className=" lg:hidden sm:block hidden w-[20%]">
            <Image
              className="h-[1400px]"
              width={100}
              height={1700}
              src="/assets/images/pricing-page/why-us/roadmap_dot.png"
              alt="witness image"
            />
          </div>
          <div className="sm:w-[80%] lg:w-full sm:max-w-[unset] max-w-[350px] mx-auto">
            {/* FIRST  */}
            <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between lg:flex-row flex-col">
              <div className="border-[1px] xl:h-[323px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative">
                <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                  Exclusive pre-launch benefits
                </p>
                <div className="pt-4 flex">
                  <span>
                    <GreenRightIcon />
                  </span>
                  <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                    <span className="font-bold">Early access:</span> be the
                    first to explore and benefit from your personalized health,
                    fitness, and mental well-being plans
                  </p>
                </div>
                <div className="pt-4 flex">
                  <span>
                    <GreenRightIcon />
                  </span>
                  <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                    <span className="font-bold">Insider updates: </span> receive
                    the latest news, updates, and tips from our team of experts,
                    keeping you informed every step of the way
                  </p>
                </div>
                <div className="pt-4 flex">
                  <span>
                    <GreenRightIcon />
                  </span>
                  <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                    <span className="font-bold">Special offers: </span> enjoy
                    exclusive discounts and offers available only to our
                    pre-launch community
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className="xl:h-[323px] lg:h-[320px] lg:w-[498px] w-full"
                  width={498}
                  height={323}
                  src="/assets/images/pricing-page/why-us/exclusive_benefits.png"
                  alt="exclusive benefits image"
                />
              </div>
            </div>
            {/* SECOND  */}
            <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between md:pt-[84px] sm:pt-[60px] pt-14 lg:flex-row flex-col-reverse">
              <div>
                <Image
                  className="xl:h-[323px] lg:h-[320px] lg:w-[498px] w-full"
                  width={498}
                  height={323}
                  src="/assets/images/pricing-page/why-us/pre_launch.png"
                  alt="personalized plan image"
                />
              </div>
              <div className="border-[1px] xl:h-[323px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative">
                <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                  Special pre-launch invitation
                </p>
                <div className="pt-4 flex">
                  <span>
                    <GreenRightIcon />
                  </span>
                  <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                    <span className="font-bold">Refer & thrive:</span> We
                    believe in the power of community, and as part of our
                    pre-launch, were introducing a referral program that rewards
                    you for spreading the word. For every friend you refer who
                    signs up for our pre-launch, youll receive an additional
                    discount on your subscription. The more friends you bring
                    into the Evexia family, the more you save
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[60px] left-[50%] translate-x-[-50%] lg:block hidden">
          <Image
            className="h-[600px]"
            width={72}
            height={1700}
            src="/assets/images/pricing-page/why-us/roadmap_dot.png"
            alt="witness image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
