import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { BsExclamationLg } from "react-icons/bs";

const TextError = (props) => {
  return (
    <div className="text-[#ff0000] flex items-center gap-1 ml-2 mt-1 ">
      <BiErrorCircle />
      {props.children}
    </div>
  );
};

export default TextError;
