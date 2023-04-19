import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Language = () => {
  return (
    <>
      <div className="flex items-center gap-1 px-2">
        <img
          src="https://flagcdn.com/w40/in.png"
          alt="Indian_flag"
          className="w-5 h-4"
        />
        <h4 className="text-white flex text-sm font-bold ">
          EN <RiArrowDownSFill className="mt-1" />
        </h4>
      </div>
    </>
  );
};

export default Language;
