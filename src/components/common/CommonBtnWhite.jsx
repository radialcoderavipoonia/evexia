import React from "react";
import { LeftArrow } from "./Icons";

const CommonBtnWhite = (props) => {
  return (
    <button className="py-[13px] px-5 sm:px-[29.5px] text-base font-semibold font-OpenSans text-blue bg-white border-blue border group rounded-md hover:text-white hover:bg-blue transition-all duration-300 ease-linear flex items-center gap-2 justify-center sm:justify-start">
      {props.title}
      <LeftArrow />
    </button>
  );
};

export default CommonBtnWhite;
