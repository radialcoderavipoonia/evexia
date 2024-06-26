import Image from "next/image";
import {
  DoubleComma,
  GreenCircle,
  LightPolygon
} from "./common/Icons";

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-[url('/assets/images/home-page/testimonial/background.webp')] bg-no-repeat bg-cover lg:mt-[120px] sm:mt-24 mt-20 relative">
      <div className="lg:pt-[130px] md:pt-[100px] pt-20">
        <div className="flex justify-center">
          <span className="text-center bg-silvertree text-white border-[1px] border-white px-[30px] py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            TESTIMONIAL
          </span>
        </div>
        <p className="pt-2 text-center text-white font-NotoSans font-bold md:text-7xl sm:text-5xl text-3xl leading-[115%] ssm:px-0 px-2">
          Our Happy Customers
        </p>
        <div className="relative max-w-[482px] mx-auto sm:px-0 px-3">
          <p className="max-w-[482px] mx-auto text-center pt-[18px] text-nebula font-OpenSans font-normal text-base leading-[155%]">
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
        <p className="text-center font-OpenSans font-normal text-sm leading-[150%] text-jetstream">
          Age - 34
        </p>
        <div className="xl:mt-[-170px] lg:mt-[-120px] mt-[-50px] max-w-[1273px] mx-auto lg:pb-[153px] pb-[100px] md:flex justify-center relative hidden ">
          <Image
            className=""
            width={1273}
            height={628}
            src="/assets/images/home-page/testimonial/images_circle.webp"
            alt="images circles"
          />
          <Image
            className="absolute animation_ping1 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[22%] top-[21%] left-[24%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_men.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping2 animate-ping md:w-[61px] w-[35px] md:h-[61px] h-[35px] lg:top-[24%] top-[21%] right-[26%] z-30"
            width={61}
            height={61}
            src="/assets/images/home-page/testimonial/third_men.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping3 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[31%] top-[29%] right-[10%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_men.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping4 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[49%] top-[43%] right-[44%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/third_men.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping5 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[30%] top-[28%] left-[10%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/second_men.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping6 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[53%] top-[48%] left-[15%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_girl.webp"
            alt="first men image circles"
          />
          <Image
            className="absolute animation_ping7 animate-ping md:w-[50px] w-[35px] md:h-[50px] h-[35px] lg:top-[58%] top-[52%] right-[20%] z-30"
            width={50}
            height={50}
            src="/assets/images/home-page/testimonial/first_girl.webp"
            alt="first men image circles"
          />
        </div>
        <div className="pb-20 sm:mt-[-50px] md:hidden block">
          <Image
            className=""
            width={1273}
            height={628}
            src="/assets/images/home-page/testimonial/small_screen_circle_image.webp"
            alt="images circles"
          />
        </div>
      </div>
      <span className="absolute right-[47px] top-[100px] lg:block hidden">
        <GreenCircle />
      </span>
      <span className="absolute right-[70px] bottom-[10px] lg:block hidden ">
        <LightPolygon />
      </span>
    </div>
  );
};

export default Testimonial;
