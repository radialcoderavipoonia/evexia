import React from "react";
import { GreenRightIcon } from "./common/Icons";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pt-[120px] xl:max-w-[1140px] xl:px-0 px-3 container mx-auto">
      <div className="flex justify-center">
        <span className="text-center bg-[#E5F4EF] text-[#27AA7E] border-[1px] border-[#27AA7E] px-6 py-[10px] text-base font-semibold font-OpenSans leading-[24px] rounded-[51px]">
          HOW IT WORKS
        </span>
      </div>
      <h2 className="pt-[6px] text-center text-[48px] font-bold font-Roboto leading-[57.6px] text-black">
        How Evexia
        <span className="text-[#27AA7E]">Transforms Wellness</span>
      </h2>
      <div className="pt-[60px] flex gap-9 justify-between">
        {/* FIRST  */}
        <div className="pt-[30px]">
          {/* FIRST  */}
          <div className="border-[1px] h-[289px] border-[#E6E6E6] p-6 rounded-2xl relative">
            <p className="font-Roboto font-medium text-[24px] leading-[28.8px]">
              Step 1: Kickstart your journey
            </p>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Get your kit:</span> Grab an Evexia
                genomic test through our app. It’s secure, simple and privacy is
                a given
              </p>
            </div>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Send your DNA:</span> With our easy
                guide, send us your sample. Our lab’s next step? Unlocking your
                genetic secrets
              </p>
            </div>
            <p className="pt-[3px] text-end font-OpenSans font-bold text-[80px] leading-[70%] text-[#EAF7F3] absolute right-[24px] bottom-[24px]">
              01
            </p>
          </div>
          {/* SECOND  */}
          <div className="py-[84px]">
            <Image
              className=""
              width={498}
              height={289}
              src="/assets/images/how-it-works/personalized_plan.png"
              alt="personalized plan image"
            />
          </div>
          {/* THIRD  */}
          <div className="border-[1px] h-[289px] border-[#E6E6E6] p-6 rounded-2xl relative">
            <p className="font-Roboto font-medium text-[24px] leading-[28.8px]">
              Step 3: Live your best life
            </p>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Track & thrive:</span> With our app,
                your health’s in your hands. Meals, workouts, and wellness –
                track it all
              </p>
            </div>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Evolving with you:</span> as you
                grow, so does your plan. Our AI keeps you on the cutting edge of
                wellness
              </p>
            </div>
            <p className="pt-3 text-end font-OpenSans font-bold text-[80px] leading-[70%] text-[#EAF7F3] absolute right-[24px] bottom-[24px]">
              03
            </p>
          </div>
          {/* FOURTH  */}
          <div className="py-[84px]">
            <Image
              className=""
              width={498}
              height={289}
              src="/assets/images/how-it-works/find_your_tribe.png"
              alt="find tribe image"
            />
          </div>
          {/* FIFTH  */}
          <div className="border-[1px] h-[289px] border-[#E6E6E6] p-6 rounded-2xl relative">
            <p className="font-Roboto font-medium text-[24px] leading-[28.8px]">
              Step 5: Witness your transformation
            </p>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">See the change:</span>feel the power
                of genetics in action. From energy boosts to mental clarity,
                witness your well-being align with your DNA
              </p>
            </div>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Share your victory: </span> Your
                success story is powerful. Inspire the community, leading the
                way in the wellness revolution
              </p>
            </div>
            <p className="pt-[3px] text-end font-OpenSans font-bold text-[80px] leading-[70%] text-[#EAF7F3] absolute right-[24px] bottom-[24px]">
              05
            </p>
          </div>
        </div>
        {/* SECOND  */}
              <div>
                   <Image
              className="h-[1700px]"
              width={72}
              height={1700}
              src="/assets/images/how-it-works/roadmap_dots.png"
              alt="personalized plan image"
            />
        </div>
        {/* THIRD  */}
        <div className="pt-[30px]">
          {/* FIRST  */}
          <div>
            <Image
              className=""
              width={498}
              height={289}
              src="/assets/images/how-it-works/kickstart.png"
              alt="personalized plan image"
            />
          </div>
          {/* SECOND  */}
          <div className="border-[1px] h-[289px] border-[#E6E6E6] p-6 rounded-2xl relative my-[84px]">
            <p className="font-Roboto font-medium text-[24px] leading-[28.8px]">
              Step 2: Unveil your personalized plan
            </p>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Deep insights:</span> Our experts
                dive into your DNA, pinpointing what makes your health tick
              </p>
            </div>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Your blueprint:</span> Get a
                tailored wellness plan – diet, exercise, and mental strategies
                crafted  just for you
              </p>
            </div>
            <p className="pt-3 text-end font-OpenSans font-bold text-[80px] leading-[70%] text-[#EAF7F3] absolute right-[24px] bottom-[24px]">
              02
            </p>
          </div>

          <div>
            <Image
              className=""
              width={498}
              height={289}
              src="/assets/images/how-it-works/live_your_best.png"
              alt="live your best image"
            />
          </div>
          <div className="border-[1px] h-[289px] border-[#E6E6E6] p-6 rounded-2xl relative my-[84px]">
            <p className="font-Roboto font-medium text-[24px] leading-[28.8px]">
              Step 4: Find your tribe
            </p>
            <div className="pt-4 flex">
              <span>
                <GreenRightIcon />
              </span>
              <p className="ps-[14px] max-w-[432px] font-OpenSans font-normal text-base laeding-[150%] text-[#4D4D4D]">
                <span className="font-bold">Community spirit:</span> You’re not
                alone. Join fellow Evexians, sharing and growing together on
                this wellness voyage
              </p>
            </div>
            <p className="pt-[3px] text-end font-OpenSans font-bold text-[80px] leading-[70%] text-[#EAF7F3] absolute right-[24px] bottom-[24px]">
              04
            </p>
          </div>
          <div>
            <Image
              className=""
              width={498}
              height={289}
              src="/assets/images/how-it-works/witness.png"
              alt="witness image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
