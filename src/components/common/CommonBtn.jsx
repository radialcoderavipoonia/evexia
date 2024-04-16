import React from "react";
import { ArrowUpwardSimple } from "./Icons";

const CommonBtn = (props) => {
  return (
    <button className=" py-[13px] px-5 sm:px-7 text-base font-semibold font-OpenSans text-white bg-blue border-blue border rounded-md hover:text-blue hover:bg-white transition-all duration-300 ease-linear">
      {props.title}
    </button>
  );
};

export default CommonBtn;
