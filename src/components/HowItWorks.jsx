import React from "react";
import { GreenCircle, GreenRightIcon, Polygon } from "./common/Icons";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="relative">
      <div className="lg:pt-[120px] sm:pt-24 pt-20 xl:max-w-[1140px] xl:px-0 px-3 container mx-auto relative z-30">
        <div className="flex justify-center">
          <span className="text-center md:mt-4 bg-mintcream text-green border-[1px] border-green px-[23.25px] py-[9.2px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="pt-[6px] text-center md:text-7xl sm:text-5xl text-3xl font-bold font-Roboto leading-[115%] text-black">
          How Evexia
          <span className="text-green">Transforms Wellness</span>
        </h2>
        <div className="lg:pt-[90px] sm:pt-[60px] pt-12  relative">
          <div className="flex justify-between">
            <div className=" lg:hidden sm:block hidden w-[20%]">
              <Image
                className="h-[3100px]"
                width={100}
                height={1700}
                src="/assets/images/home-page/how-it-works/roadmap_dots.png"
                alt="witness image"
              />
            </div>
            <div className="sm:w-[80%] lg:w-full sm:max-w-[unset] max-w-[350px] mx-auto">
              {/* FIRST  */}
              <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between lg:flex-row flex-col">
                <div className="border-[1px] xl:h-[289px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative xl:w-[498px]">
                  <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                    Step 1: Kickstart your journey
                  </p>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Get your kit:</span> Grab an
                      Evexia genomic test through our app. It’s secure, simple
                      and privacy is a given
                    </p>
                  </div>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Send your DNA:</span> With our
                      easy guide, send us your sample. Our lab’s next step?
                      Unlocking your genetic secrets
                    </p>
                  </div>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan absolute right-[24px] bottom-[24px] lg:block hidden">
                    01
                  </p>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan lg:hidden block">
                    01
                  </p>
                </div>
                <div className="xl:w-[498px]">
                  <Image
                    className="xl:h-[289px] lg:h-[320px] lg:w-[498px] w-full border-[1.15px] border-green rounded-2xl"
                    width={498}
                    height={289}
                    src="/assets/images/home-page/how-it-works/kickstart.png"
                    alt="kickstart image"
                  />
                </div>
              </div>
              {/* SECOND  */}
              <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between md:pt-[84px] sm:pt-[60px] pt-14 lg:flex-row flex-col-reverse">
                <div className="xl:w-[498px]">
                  <Image
                    className="xl:h-[289px] lg:h-[320px] lg:w-[498px] w-full border-[1.15px] border-green rounded-2xl"
                    width={498}
                    height={289}
                    src="/assets/images/home-page/how-it-works/personalized_plan.png"
                    alt="personalized plan image"
                  />
                </div>
                <div className="border-[1px] xl:h-[289px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative xl:w-[498px]">
                  <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                    Step 2: Unveil your personalized plan
                  </p>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Deep insights:</span> Our
                      experts dive into your DNA, pinpointing what makes your
                      health tick
                    </p>
                  </div>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Your blueprint:</span> Get a
                      tailored wellness plan – diet, exercise, and mental
                      strategies crafted  just for you
                    </p>
                  </div>
                  <p className="pt-3 text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan absolute right-[24px] bottom-[24px] lg:block hidden">
                    02
                  </p>
                  <p className="pt-3 text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan lg:hidden block">
                    02
                  </p>
                </div>
              </div>
              {/* THIRD  */}
              <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between md:pt-[84px] sm:pt-[60px] pt-14 lg:flex-row flex-col">
                <div className="border-[1px] xl:h-[289px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative xl:w-[498px]">
                  <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                    Step 3: Live your best life
                  </p>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Track & thrive:</span> With
                      our app, your health’s in your hands. Meals, workouts, and
                      wellness – track it all
                    </p>
                  </div>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Evolving with you:</span> as
                      you grow, so does your plan. Our AI keeps you on the
                      cutting edge of wellness
                    </p>
                  </div>
                  <p className="pt-3 text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan absolute right-[24px] bottom-[24px] lg:block hidden">
                    03
                  </p>
                  <p className="pt-3 text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan lg:hidden block">
                    03
                  </p>
                </div>
                <div className="xl:w-[498px]">
                  <Image
                    className="xl:h-[289px] lg:h-[320px] lg:w-[498px] w-full border-[1.15px] border-green rounded-2xl"
                    width={498}
                    height={289}
                    src="/assets/images/home-page/how-it-works/live_your_best.png"
                    alt="live your best life image"
                  />
                </div>
              </div>
              {/* FORTH  */}
              <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between md:pt-[84px] sm:pt-[60px] pt-14 lg:flex-row flex-col-reverse">
                <div className="xl:w-[498px]">
                  <Image
                    className="xl:h-[289px] lg:h-[320px] lg:w-[498px] w-full border-[1.15px] border-green rounded-2xl"
                    width={498}
                    height={289}
                    src="/assets/images/home-page/how-it-works/find_your_tribe.png"
                    alt="find your tribe image"
                  />
                </div>
                <div className="border-[1px] xl:h-[289px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative xl:w-[498px]">
                  <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                    Step 4: Find your tribe
                  </p>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Community spirit:</span>{" "}
                      You’re not alone. Join fellow Evexians, sharing and
                      growing together on this wellness voyage
                    </p>
                  </div>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan absolute right-[24px] bottom-[24px] lg:block hidden">
                    04
                  </p>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan lg:hidden block">
                    04
                  </p>
                </div>
              </div>
              {/* FIFTH  */}
              <div className="flex lg:gap-[144px] sm:gap-10 gap-8 justify-between md:pt-[84px] sm:pt-[60px] pt-14 lg:flex-row flex-col">
                <div className="border-[1px] xl:h-[289px] lg:h-[320px] border-mercury sm:p-6 p-4 rounded-2xl relative xl:w-[498px]">
                  <p className="font-Roboto font-medium md:text-2xl text-xl leading-[116%]">
                    Step 5: Witness your transformation
                  </p>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">See the change:</span>feel the
                      power of genetics in action. From energy boosts to mental
                      clarity, witness your well-being align with your DNA
                    </p>
                  </div>
                  <div className="pt-4 flex">
                    <span>
                      <GreenRightIcon />
                    </span>
                    <p className="ps-[14px] max-w-[412px] font-OpenSans font-normal text-base laeding-[150%] text-liver">
                      <span className="font-bold">Share your victory: </span>{" "}
                      Your success story is powerful. Inspire the community,
                      leading the way in the wellness revolution
                    </p>
                  </div>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan absolute right-[24px] bottom-[24px] lg:block hidden">
                    05
                  </p>
                  <p className="pt-[3px] text-end font-OpenSans font-bold md:text-10xl text-9xl leading-[70%] text-greenishcyan lg:hidden block">
                    05
                  </p>
                </div>
                <div className="xl:w-[498px]">
                  <Image
                    className="xl:h-[289px] lg:h-[320px] lg:w-[498px] w-full border-[1.15px] border-green rounded-2xl"
                    width={498}
                    height={289}
                    src="/assets/images/home-page/how-it-works/witness.png"
                    alt="witness image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[60px] left-[50%] translate-x-[-50%] lg:block hidden">
            <Image
              className="h-[1700px]"
              width={72}
              height={1700}
              src="/assets/images/home-page/how-it-works/roadmap_dots.png"
              alt="witness image"
            />
          </div>
        </div>
      </div>
      <Image
        className="absolute left-[7.5%] w-[86px] h-[185px] top-[555px] lg:block hidden"
        width={86}
        height={185}
        src="/assets/images/home-page/how-it-works/left_side_lines.png"
        alt="left side lines image"
      />
      <span className="absolute left-[4%] top-[670px] lg:block hidden">
        <GreenCircle />
      </span>
      <span className="absolute right-[7%] bottom-[280px] lg:block hidden">
        <Polygon />
      </span>
      <div className="w-[160px] h-[160px] circle_effect_bg rounded-[100%] blur-3xl absolute top-[570px] right-[-80px] md:block hidden"></div>
    </div>
  );
};

export default HowItWorks;
