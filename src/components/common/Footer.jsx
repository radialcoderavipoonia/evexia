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
        <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:pb-[118px] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-6 justify-between">
            <div className="md:w-4/12 lg:w-5/12">
              <Image
                className="lg:w-[290px] w-[135px]"
                width={185}
                height={20}
                src="/assets/common/footer-logo.svg"
                alt="logo"
              />
              <div className="pt-12 md:pt-8 lg:pt-[50px] ">
                <div className="gap-1.5 flex flex-col">
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark uppercase">
                    United states
                  </p>
                  <p className="font-medium text-sm text-riverBed !leading-[140%]">
                    2055 Limestone Road, Wilmington, Delaware 19808
                  </p>
                </div>
                <div className="flex gap-3 md:gap-1 xl:gap-3 pt-2">
                  {socialIconList.map((value, index) => {
                    return (
                      <Link
                        aria-label={value.socialmedia}
                        target="_blank"
                        key={index}
                        className="w-9 h-9 bg-[#EDEFF2] rounded-full flex justify-center items-center hover:bg-darkBlue duration-300 group"
                        href={value.link}
                      >
                        {value.icon}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-6/12 pt-6 sm:pt-8 md:pt-0">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-3 xl:gap-6">
                <div>
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Company
                  </p>
                  <ul className="flex flex-col gap-[9px]">
                    {footerCompanyList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-medium text-sm text-white hover:text-shark duration-300 !leading-[140%]"
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
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Solution
                  </p>
                  <ul className="flex flex-col gap-[9px]">
                    {footerSolutionList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-medium text-sm text-white hover:text-shark duration-300 !leading-[140%]"
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
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Contact us
                  </p>
                  <p className="font-bold text-sm text-shark !leading-[140%] pb-1">
                    Phone
                  </p>
                  <Link
                    target="_blank"
                    className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                    href="tel:+8802222274550"
                  >
                    +88 02 2222 74550
                  </Link>
                  <p className="font-bold text-sm text-shark !leading-[140%] pb-1 pt-5 md:pt-6">
                    Email
                  </p>
                  <Link
                    target="_blank"
                    className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                    href="mailto:hello@nuport.io"
                  >
                    hello@nuport.io
                  </Link>
                  <p className="font-riverBed text-sm text-shark !leading-[140%] pt-5 md:pt-6 pb-1">
                    Follow us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
