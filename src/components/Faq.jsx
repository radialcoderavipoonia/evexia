"use client";
import React, { useState } from "react";
import { faqList } from "./common/Helper";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="xl:max-w-[1140px] container px- xl:px-0 mx-auto pb-14 sm:pb-16 md:pb-20  lg:pb-[120px]">
        <div className="flex justify-center flex-col items-center">
          <span className="text-center md:mt-4 bg-mintcream text-green border-[1px] border-green px-6 py-[10px] sm:text-base text-sm font-semibold font-OpenSans leading-[150%] rounded-[51px]">
            FREQUENTLY ASKED QUESTION
          </span>
          <h2 className="pt-2 text-center md:text-[48px] sm:text-[40px] text-[32px] font-bold font-Roboto leading-[115%] text-black">
            Frequently
            <span className="text-green">Asked Questions</span>
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between mt-5 md:mt-[36px]">
          {faqList.map((obj, index) => (
            <div key={index} className=" w-full md:w-1/2 px-3">
              <div className=" mt-4 md:mt-6   text-black opacity-80 py-2 ps-3 pr-[18px] border border-lightBlack rounded-md">
                {/* Accordion item container */}
                <div className=" w-full">
                  {/* Accordion button */}
                  <button
                    type="button"
                    className={`flex items-center justify-between font-OpenSans text-base font-normal text-start w-full ${
                      expandedIndex === index ? "" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faqs-text-${index}`}
                  >
                    {/* Title of the accordion item */}
                    {obj.title}
                    {/* Chevron icon for indicating accordion state */}

                    <span
                      className={`max-w-8 md:max-w-11 w-full h-8 md:h-11 ms-2 rounded-full  relative before:absolute before:z-20 after:absolute before:bg-gray after:bg-gray before:top-1/2 before:-translate-x-1/2 before:start-1/2 before:-translate-y-1/2
                                        before:w-[14px] before:h-0.5 before:rounded-2xl before:bg-black after:w-0.5 after:h-[14px] after:rounded-2xl after:-translate-x-1/2 after:top-1/2 after:start-1/2 after:-translate-y-1/2
                                        duration-300 ${
                                          expandedIndex === index
                                            ? " before:bg-black after:bg-black before:z-20 rotate-180"
                                            : ""
                                        }
                                        `}
                    ></span>
                  </button>
                  {/* Accordion content */}
                  <div
                    id={`faqs-text-${index}`}
                    role="region"
                    aria-labelledby={`faqs-title-${index}`}
                    className={`grid text-sm text-slate-600  overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    {" "}
                    <div className="overflow-hidden">
                      <p className="font-OpenSans text-base font-normal text-start text-black opacity-80  pt-3 md:pt-4 lg:pt-[18px]">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;