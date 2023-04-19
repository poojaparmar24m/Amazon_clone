import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { BiCopyright } from "react-icons/bi";
import "../../Css/style.css";
const FooterSm = () => {
  return (
    <>
      <div className="flex flex-col text-white w-full  ">
        <Link to="/">
          <div className="flex flex-col bg-slate-700 items-center py-1">
            <IoMdArrowDropup />
            <span className="text-sm">Back To Top</span>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-3 bg-slate-800 py-3 px-5">
          <Link to="/">
            <h3 className="text-sm"> Your amazon.in</h3>
          </Link>{" "}
          <Link to="/signin">
            <h3 className="text-sm"> Your orders</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Amazon pay</h3>
          </Link>
          <Link to="/">
            {" "}
            <h3 className="text-sm">Amazon App Download</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Wish List</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Find a Wish List</h3>
          </Link>
          <Link to="/signin">
            <h3 className="text-sm">Your Account</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Your Recently Viewed Items</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Returns</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Sell</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm">Customer servies</h3>
          </Link>
        </div>
        <div className="flex flex-col gap-1 bg-gray-900 items-center py-3 ">
          <div className="flex gap-2 py-4">
            <TbWorld className="mt-1" />
            <span className="text-sm">English</span>
          </div>
          <div className="flex gap-1 my-2">
            <h3 className="text-sm mt-0.5">Already a customer?</h3>
            <Link to="/signin">
              <span className="text-sm">sign in</span>
            </Link>
          </div>
          <div className="flex gap-4 " style={{ fontSize: "12px" }}>
            <a href="/"> Condition of Use</a>
            <a href="/"> Privacy Notice</a>
            <a href="/">Interest-Based Ads</a>
          </div>
          <div className="flex gap-1 my-2">
            <BiCopyright className="text-sm mt-1" />
            <span style={{ fontSize: "12px" }}>
              1996-2023,Amazon.com,Inc.and its affiliates
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const FooterLg = () => {
  return (
    <>
      <div className="flex flex-col text-white w-full">
        <Link to="/">
          <div className="flex flex-col bg-slate-700 items-center py-3">
            <span className="text-sm">Back To Top</span>
          </div>
        </Link>

        <div className="grid grid-cols-4 gap-2.5 bg-slate-800 py-4 pl-20 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-10 md:text-sm 2xl:gap-2.5 xl:gap-2.5 lg:gap-2.5 md:gap-1.5 ">
          <h3 className="text-md font-bold ">Get to Know Us</h3>
          <h3 className="text-md font-bold">Connect with Us</h3>
          <h3 className="text-md font-bold">Make Money with Us</h3>
          <h3 className="text-md font-bold">Let Us Help You</h3>
          <Link to="/">
            <h3 className="text-sm footer_text">About Us</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Facebook</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">sell On Amazon</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">COVIED-19 and Amazon</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Careers</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Twitter</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">
              Sell under Amazon Accelertor
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Your Account</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Press Release</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Instagram</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">
              Protect and Build your Brand
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Returns Center</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Amazon Science</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">{""}</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Amazon Global Selling</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">100% Purches protaction</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">{""}</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">{""}</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Become An Affiliate</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Amazon App Download</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">{""}</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">{""}</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">FulFilment By Amazon</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text">Help</h3>
          </Link>
        </div>

        <div className="flex flex-col gap-2 bg-slate-800 items-center">
          <div className="my-3 w-full">
            <hr />
          </div>
          <div className="flex flex-row gap-14 my-2">
            <Link to="/">
              <img
                src="https://pngimg.com/d/amazon_PNG25.png"
                alt="amazon_logo"
                className="text-white bg-transparent mt-1"
                style={{ height: "40px", width: "80px" }}
              />
            </Link>
            <div className="border border-white rounded-md px-3  flex flex-row gap-2 items-center">
              <TbWorld className="mt-0.5" />
              <span className="text-sm">English</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-sm mb-4">
            <a href="/">Australia</a>
            <a href="/">Brazil</a>
            <a href="/">canada</a>
            <a href="/">china</a>
            <a href="/">Germany</a>
            <a href="/">Japan</a>
            <a href="/">singapor</a>
            <a href="/">Mexico</a>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1 bg-gray-900 py-4 px-8">
          <h3 className="text-sm font-bold">AbeBooks</h3>
          <h3 className="text-sm font-bold">Amazon Web service</h3>
          <h3 className="text-sm font-bold">audible</h3>
          <h3 className="text-sm font-bold">DPreview</h3>
          <h3 className="text-sm font-bold">IMDB</h3>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">Books,art</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              Scalable Cloud
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">Dowanload</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">Digital</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">Movies,TV</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text mb-3 text-gray-500">
              & Collection
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text mb-3 text-gray-500">
              Computing Service
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text mb-3 text-gray-500">
              Audio Book
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text mb-3 text-gray-500">
              {" "}
              Photograpy
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text mb-3 text-gray-500">
              & Celebrities
            </h3>
          </Link>
          <h3 className="text-sm font-bold">shopbop</h3>
          <h3 className="text-sm font-bold">Amazon Business</h3>
          <h3 className="text-sm font-bold">prime Now</h3>
          <h3 className="text-sm font-bold">Amazon Prime Music</h3>
          <h3>{""}</h3>
          <Link to="/">
            <h3 className="text-sm footer_text  text-gray-500">Designer</h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              Everything For
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text  text-gray-500">
              2-Hours Delievry
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text  text-gray-500">
              100 Milion songs,ad-free
            </h3>
          </Link>
          <h3>{""}</h3>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              Fashion Brands
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              Your Bussiness
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              on everyDay items
            </h3>
          </Link>
          <Link to="/">
            <h3 className="text-sm footer_text text-gray-500">
              Over 15 Milions episodes
            </h3>
          </Link>
        </div>

        <div className="flex flex-col gap-1 bg-gray-900 py-3 items-center">
          <div className="flex gap-3" style={{ fontSize: "12px" }}>
            <a href="/"> Condition of Use & Sale</a>
            <a href="/"> Privacy Notice</a>
            <a href="/">Interest-Based Ads</a>
          </div>
          <div className="flex gap-1 my-2">
            <BiCopyright className="text-sm mt-0.5" />
            <span style={{ fontSize: "12px" }}>
              1996-2023,Amazon.com,Inc.and its affiliates
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex w-full footer_sm">
        <FooterSm />
      </div>
      <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden w-full footer_lg ">
        <FooterLg />
      </div>
    </>
  );
};

export default Footer;
