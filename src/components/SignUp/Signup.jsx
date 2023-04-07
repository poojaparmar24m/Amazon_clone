import React from "react";
import { IoAlert } from "react-icons/io5";

const Signup = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-2">
        <div className=" my-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="amazon_logo"
            className="text-white bg-transparent mx-auto "
            style={{ height: "40px", width: "110px" }}
          />
        </div>

        <div
          className="mx-auto flex flex-col gap-2 items-start border  my-1"
          style={{ padding: "22px 25px 22px 25px" }}
        >
          <h1 className="text-2xl text-start font-semibold ">Create Account</h1>
          <div className="flex flex-col gap-1 text-sm  tracking-wide mt-1">
            <h3 className="font-semibold">Your Name</h3>
            <input
              type="text"
              placeholder="First and Last name"
              className="rounded-sm sign_input   bg-transparent p-1 px-2 py-1"
              style={{ width: "320px" }}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm  tracking-wide mt-1">
            <h3 className="font-semibold">Mobile Number</h3>
            <input
              type="number"
              placeholder="Mobile number"
              className="rounded-sm sign_input   bg-transparent p-1 px-2 py-1"
              style={{ width: "320px" }}
            />
          </div>
          <div className="flex flex-col gap-1 text-sm  tracking-wide mt-1">
            <h3 className="font-semibold">Password</h3>
            <input
              type="password"
              placeholder="At least 6 character"
              className="rounded-sm sign_input   bg-transparent p-1 px-2 py-1"
              style={{ width: "320px" }}
            />
            <div className="flex flex-row">
              <IoAlert className="text-sky-500 mt-1" />
              <span className="text-gray-500" style={{ fontSize: "12px" }}>
                Password must be at least 6 characters
              </span>
            </div>
          </div>
          <div className="tracking-wide ">
            <p style={{ fontSize: "13px" }} className=" text-gray-800">
              By enrolling your mobile phone number, you consent
              <br /> to receive automated security notifications via text
              <br />
              message from Amazon. Message and data rates may
              <br /> apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
