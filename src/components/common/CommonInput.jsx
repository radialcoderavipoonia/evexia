import React from "react";

const CommonInput = (props) => {
  return (
    <div>
      <form>
        <input
          className="font-OpenSans text-sm font-semibold text-[#4D4D4D] outline-none border-none py-4 ps-5 rounded-lg"
          type={props.type}
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
};

export default CommonInput;
