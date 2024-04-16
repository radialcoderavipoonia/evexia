import React from "react";
import CommonSection from "./common/CommonSection";
import Image from "next/image";

const Transforming = () => {
  return (
    <div className="relative">
      <CommonSection
        title="Unlock Your Best Self"
        decoration="Don’t put off what could be your brightest future. Your unique DNA holds the blueprint for ultimate health and happiness"
        btnTitle="Start Transforming"
        bar="button"
        imgSrc="/assets/images/home-page/transforming/unlock.png"
        shortDecoration="Act fast! Exclusive slots for our personalized DNA analysis are filling up. Claim yours and step into a life where wellness is woven into your genes"
      />
      <Image
        className="absolute left-[6.5%] w-[43px] h-[92px] top-[225px] lg:block hidden rotate-[7.17deg]"
        width={43}
        height={92}
        src="/assets/images/home-page/how-it-works/left_side_lines.png"
        alt="left side lines image"
      />
      <Image
        className="absolute right-[20.5%] w-[44px] h-[96px] bottom-[-145px] lg:block hidden "
        width={44}
        height={96}
        src="/assets/images/home-page/how-it-works/left_side_lines.png"
        alt="left side lines image"
      />
    </div>
  );
};

export default Transforming;
