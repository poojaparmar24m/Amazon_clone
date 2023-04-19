import React from "react";
import { IoAlert } from "react-icons/io5";
import { BiCaretRight } from "react-icons/bi";
import { CgCopyright } from "react-icons/cg";
import { Link } from "react-router-dom";

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
          <div className="text-center mt-1">
            <button
              className="bg-amber-300 border border-gray-950 rounded-md text-sm py-1 hover:bg-amber-400"
              style={{ width: "320px" }}
            >
              Continue
            </button>
          </div>
          <div className="mt-4" style={{ fontSize: "13px" }}>
            <h3 className="flex flex-row gap-1">
              Already have an account?{" "}
              <Link to="/signin">
                <span className="flex flex-row">
                  <a href="/" className="sign_in_anchor text-sky-600">
                    Sign in{" "}
                  </a>
                  <BiCaretRight className="mt-1 text-sky-600" />
                </span>
              </Link>
            </h3>
            <h3 className="flex flex-row gap-1">
              Buying for work?
              <Link to="/">
                <span className="flex flex-row">
                  <a href="/" className="sign_in_anchor text-sky-600">
                    Create a free business account
                  </a>
                  <BiCaretRight className="mt-1 text-sky-600" />
                </span>
              </Link>
            </h3>
          </div>
          <div className="mt-3 " style={{ fontSize: "13px" }}>
            <h3>
              By creating an account or logging in, you agree to <br /> Amazon’s
              <a href="/" className="sign_in_anchor text-sky-600">
                {" "}
                Conditions of Use
              </a>{" "}
              and{" "}
              <a href="/" className="sign_in_anchor text-sky-600">
                {" "}
                Privacy Policy.
              </a>{" "}
            </h3>
          </div>
        </div>
      </div>

      <div className="my-3">
        <hr />
      </div>

      <div className="container mx-auto flex flex-col gap-2">
        <div
          className="flex flex-row gap-3 items-center mx-auto"
          style={{ fontSize: "12px" }}
        >
          <a href="/" className="sign_in_anchor text-sky-600">
            {" "}
            Condition of Use
          </a>
          <a href="/" className="sign_in_anchor text-sky-600">
            Privacy Notice
          </a>
          <a href="/" className="sign_in_anchor text-sky-600">
            Help
          </a>
        </div>
        <div className="mx-auto text-sm flex flex-row gap-1 ">
          <CgCopyright className="mt-1 text-gray-500" />
          <span
            className="text-sm text-gray-500 tracking-wide"
            style={{ fontSize: "12px" }}
          >
            1996-2023,Amazon.com,Inc. or its affiliates
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
