import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { CgCopyright } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../../Css/style.css";

const SigninPage = () => {
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
          <h1 className="text-2xl text-start font-semibold ">Sign in</h1>
          <div className="flex flex-col gap-1 text-sm font-bold tracking-wide mt-1">
            <h3>Email or mobile Phone number</h3>
            <input
              type="text"
              className="rounded-md sign_input bg-transparent p-1 shadow-sm"
              style={{ width: "320px" }}
            />
          </div>
          <div className="text-center mt-1">
            <button
              className="bg-amber-300 border border-gray-950 rounded-md text-sm py-1 hover:bg-amber-400"
              style={{ width: "320px" }}
            >
              Continue
            </button>
          </div>
          <div className=" mt-2">
            <h4 className="tracking-wide text-sm">
              By countinuing, you agree to Amazon's
              <a href="/" className="sign_in_anchor text-sky-600 text-sm">
                {" "}
                Conditions <br /> of Use{" "}
              </a>{" "}
              and{" "}
              <a href="/" className="sign_in_anchor text-sky-600 text-sm">
                privacy Notice
              </a>
            </h4>
          </div>
          <div className="flex flex-row items-start gap-1 mt-3">
            <IoMdArrowDropright className="mt-1 cursor-pointer" />
            <a href="/" className="sign_in_anchor text-sky-600 text-sm">
              Need Help?
            </a>
          </div>
        </div>

        <div className="flex mx-auto gap-2 mt-2 items-center">
          <div className="border border-gray-500 w-32"> </div>
          <h3 className="text-sm text-gray-500">New to Amazon?</h3>
          <div className="border border-gray-500 w-32"></div>
        </div>
        <div className="text-center mt-2  mx-auto border  border-stone-950  rounded-md bg-gray-200  hover:bg-gray-300">
          <Link to="/signup">
            <button
              className=" text-sm py-1  create_btn cursor-pointer"
              style={{ width: "375px" }}
            >
              Create your Amazon Account
            </button>
          </Link>
        </div>
        <div className="my-3">
          <hr />
        </div>
        <div
          className="flex flex-row gap-3  items-center mx-auto"
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

export default SigninPage;
