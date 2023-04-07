import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col  text-white">
        <h6 style={{ fontSize: "13px" }}>Hello,sign in</h6>

        <h5 className="text-sm flex font-bold ">
          Account & Lists <RiArrowDownSFill className="mt-1" />{" "}
        </h5>
      </div>
    </>
  );
};

export default SignIn;
