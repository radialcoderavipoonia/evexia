import React from "react";
import { DoubleComma } from "./common/Icons";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[url('/assets/images/home-page/testimonial/background.png')] bg-no-repeat bg-cover lg:mt-[120px] sm:mt-24 mt-20">
      <div className="lg:pt-[130px] md:pt-[100px] pt-20">
        <div className="flex justify-center">
          <span className="text-center bg-[#57BD9B] text-[#FFFFFF] border-[1px] border-[#FFFFFF] px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            TESTIMONIAL
          </span>
        </div>
        <p className="pt-2 text-center text-white font-NotoSans font-bold md:text-[48px] sm:text-[40px] text-[32px] leading-[115%] ssm:px-0 px-2">
          Our Happy Customers
        </p>
        <div className="relative max-w-[482px] mx-auto sm:px-0 px-3">
          <p className="max-w-[482px] mx-auto text-center pt-[18px] text-[#BCE0D7] font-OpenSans font-normal text-base leading-[155%]">
            Eevexia has been a game-changer for me. Understanding my genetic
            makeup and how it affects my health has allowed me to finally break
            through my fitness plateau. Ive never felt better!
          </p>
          <p className="absolute top-[-10px] left-[-80px] md:block hidden">
            <DoubleComma />
          </p>
          <p className="absolute bottom-[-20px] right-[-50px] rotate-180 md:block hidden">
            <DoubleComma />
          </p>
        </div>
        <p className="text-center pt-[14px] font-OpenSans font-bold text-base leading-[150%] text-white">
          Emma
        </p>
        <p className="text-center font-OpenSans font-normal text-sm leading-[150%] text-[#B9D5D0]">
          Age - 34
        </p>
        <div className="xl:mt-[-170px] lg:mt-[-120px] mt-[-50px] max-w-[1273px] mx-auto lg:pb-[153px] pb-[100px] md:flex justify-center relative hidden ">
          <Image
            className=""
            width={1273}
            height={628}
            src="/assets/images/home-page/testimonial/images_circle.png"
            alt="images circles"
          />
          <Image
            className="absolute animation_ping1 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[26%] top-[21%] left-[24%]"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_men.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping2 animate-ping md:w-[61px] w-[35px] md:h-[61px] h-[35px] lg:top-[28%] top-[21%] right-[26%]"
            width={61}
            height={61}
            src="/assets/images/home-page/testimonial/third_men.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping3 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[35%] top-[29%] right-[10%]"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_men.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping4 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[53%] top-[43%] right-[44%]"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/third_men.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping5 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[34%] top-[28%] left-[10%]"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/second_men.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping6 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[57%] top-[48%] left-[15%]"
            width={50}
            height={50}
            src="/assets/images/testimonial/first_girl.png"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping7 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[62%] top-[52%] right-[20%]"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_girl.png"
            alt="first men image circles"
          />
        </div>
        <div className="pb-20 sm:mt-[-50px] md:hidden block">
          <Image
            className=""
            width={1273}
            height={628}
            src="/assets/images/home-page/testimonial/small_screen_circle_image.png"
            alt="images circles"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
