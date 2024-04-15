import React from "react";
import { DoubleComma } from "./common/Icons";

const Testimonial = () => {
  return (
    <div className="bg-[url('/assets/images/testimonial/background.png')] bg-no-repeat bg-cover">
      <div className="pt-[130px]">
        <div className="flex justify-center">
          <span className="text-center bg-[#57BD9B] text-[#FFFFFF] border-[1px] border-[#FFFFFF] px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            TESTIMONIAL
          </span>
        </div>
        <p className="pt-2 text-center text-white font-NotoSans font-bold text-[48px] leading-[115%]">
          Our Happy Customers
        </p>
        <div className="relative max-w-[482px] mx-auto">
          <p className="max-w-[482px] mx-auto text-center pt-[18px] text-[#BCE0D7] font-OpenSans font-normal text-base leading-[155%]">
            Eevexia has been a game-changer for me. Understanding my genetic
            makeup and how it affects my health has allowed me to finally break
            through my fitness plateau. Ive never felt better!
          </p>
          <p className="absolute top-[-10px] left-[-80px]">
            <DoubleComma />
          </p>
          <p className="absolute bottom-[-20px] right-[-50px] rotate-180">
            <DoubleComma />
          </p>
        </div>
        <p className="text-center pt-[14px] font-OpenSans font-bold text-base leading-[150%] text-white">
          Emma
        </p>
        <p className="text-center font-OpenSans font-normal text-sm leading-[150%] text-[#B9D5D0]">
          Age - 34
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
