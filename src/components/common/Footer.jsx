import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  footerCompanyList,
  footerSolutionList,
  socialIconList,
} from "./Helper";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" bg-black">
        <div className="xl:max-w-[1140px] container px-3 xl:px-0 mx-auto pt-10 pb-[50px]">
          <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-between justify-center ">
            <div className="lg:w-4/12 xl:w-5/12">
              <Image
                className="lg:w-[290px] w-[135px] mx-auto lg:mx-0"
                width={185}
                height={20}
                src="/assets/common/footer-logo.svg"
                alt="logo"
              />
              <div className=" pt-3 lg:pt-8">
                <div className="gap-1.5 flex flex-col justify-center items-center lg:items-start">
                  <p className=" font-OpenSans opacity-70 text-sm text-white !leading-[140%] max-w-[465px] mx-auto lg:mx-0 text-center lg:text-start">
                    Embark on your journey to optimal health with Evexia. Our
                    revolutionary approach, tailored to your unique genetic
                    blueprint, promises a transformative path towards peak
                    well-being.{" "}
                  </p>
                </div>
                <p className="font-OpenSans font-semibold text-xl text-white mt-5 text-center lg:text-start">
                  Follow Us On
                </p>
                <div className="flex gap-3 md:gap-1 xl:gap-4 mt-1 justify-center lg:justify-start">
                  {socialIconList.map((value, index) => {
                    return (
                      <Link
                        aria-label={value.socialmedia}
                        target="_blank"
                        key={index}
                        className=" hover:scale-105 transition-all duration-300 ease-in-out"
                        href={value.link}
                      >
                        {value.icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:w-8/12 xl:w-6/12 pt-6 sm:pt-10 lg:pt-0">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-3 xl:gap-6">
                <div>
                  <p className="font-OpenSans font-semibold text-xl text-white !leading-[32px]">
                    Quick Links
                  </p>
                  <ul className="flex flex-col gap-[9px] mt-4">
                    {footerCompanyList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-OpenSans text-base !leading-[25px] text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out"
                            href={value.link}
                          >
                            {value.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="font-OpenSans font-semibold text-xl text-white !leading-[32px]">
                    Contact us
                  </p>
                  <div className=" flex flex-col gap-[9px] mt-4">
                    <Link
                      target="_blank"
                      className="font-OpenSans text-base !leading-[25px] text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out"
                      href="evexia@gmail.com"
                    >
                      evexia@gmail.com
                    </Link>

                    <Link
                      target="_blank"
                      className="font-OpenSans text-base !leading-[25px] text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out block"
                      href="tel:+8802222274550"
                    >
                      +91 12345 6789 0
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-OpenSans font-semibold text-xl !leading-[32px] text-white ">
                    Legal
                  </p>
                  <ul className="flex flex-col gap-[9px] mt-4">
                    {footerSolutionList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-OpenSans text-base !leading-[25px] text-white opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out"
                            href={value.link}
                          >
                            {value.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t footer-b">
          <p className="font-OpenSans text-base !leading-[25px] text-white opacity-70 text-center pt-4 pb-[26px]">
            @ {year} Copyright EVEXIA, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
