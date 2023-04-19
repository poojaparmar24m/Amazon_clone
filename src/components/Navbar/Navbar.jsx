import React from "react";
import { Link } from "react-router-dom";
import Location from "./Location";
import Search from "./Search";
import Language from "./Language";
import SignIn from "./SignIn";
import "../../Css/style.css";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiCartAdd } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { AiOutlineClose } from "react-icons/ai";
import SideMenuSm from "../SideMenuNavbar/SideMenuSm";

const NavbarLg = () => {
  return (
    <>
      <div className="flex flex-row items-center py-1 w-full navbar_lg  2xl:gap-3 xl:gap-4 lg:gap-3">
        <div className="p-1 px-1 outer_box">
          <Link to="/">
            <img
              src="https://pngimg.com/d/amazon_PNG25.png"
              alt="amazon_logo"
              className="text-white bg-transparent"
              style={{ height: "50px", width: "120px" }}
            />
          </Link>
        </div>
        <div className="p-1 px-1 outer_box">
          <Location />
        </div>
        <div className="2xl:flex xl:flex lg:flex">
          <Search />
        </div>
        <div className="outer_box p-2 ">
          <Link to="/">
            <Language />
          </Link>
        </div>
        <div className="outer_box p-1 py-1">
          <Link to="/signin">
            <SignIn />
          </Link>
        </div>
        <div className="outer_box p-1">
          <Link to="/signin">
            <div className="flex flex-col text-white">
              <h6 style={{ fontSize: "13px" }}>Returns</h6>
              <h5 className="text-sm flex font-bold ">& Orders </h5>
            </div>
          </Link>
        </div>
        <div className="outer_box p-1 ">
          <Link to="/">
            <div className="flex flex-row text-white ">
              <BiCartAdd className="w-10 h-10" />
              <span className="font-bold mt-3 text-sm">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const NavbarMd = () => {
  return (
    <>
      <div className="flex flex-col gap-1 px-1 w-full py-1 ">
        <div className="flex flex-row  justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div className="p-1 px-1 outer_box">
              <Link to="/">
                <img
                  src="https://pngimg.com/d/amazon_PNG25.png"
                  alt="amazon_logo"
                  className="text-white bg-transparent"
                  style={{ height: "50px", width: "120px" }}
                />
              </Link>
            </div>
            <div className="p-1 px-1 outer_box">
              <Location />
            </div>
            <div className="2xl:flex xl:flex lg:flex md:hidden">
              <Search />
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center px-1 ">
            <div className="outer_box p-2 ">
              <Link to="/">
                <Language />
              </Link>
            </div>
            <div className="outer_box p-1 py-1">
              <Link to="/signin">
                <SignIn />
              </Link>
            </div>
            <div className="outer_box p-1">
              <Link to="/signin">
                <div className="flex flex-col text-white">
                  <h6 style={{ fontSize: "13px" }}>Returns</h6>
                  <h5 className="text-sm flex font-bold ">& Orders </h5>
                </div>
              </Link>
            </div>
            <div className="outer_box p-1 ">
              <Link to="/">
                <div className="flex flex-row text-white ">
                  <BiCartAdd className="w-10 h-10" />
                  <span className="font-bold mt-3 text-sm">Cart</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbarsm = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-800 gap-1 px-1 w-full">
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row items-center gap-2 ">
            <div>
              <button
                className="navbar-toggler flex gap-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbarSm"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <RxHamburgerMenu className="text-white text-2xl" />
              </button>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasNavbarSm"
                aria-labelledby="offcanvasNavbarLabelSm"
              >
                <div className=" flex flex-row justify-between  text-white  bg-gray-700">
                  <div className="offcanvas-header ">
                    <div className="flex gap-2 px-2 ">
                      <h5
                        className="offcanvas-title text-lg font-semibold"
                        id="offcanvasNavbarLabelSm"
                      >
                        <div className="flex flex-col">
                          <div className="pl-64">
                            <Link to="/signin" className="flex gap-2">
                              <span className="text-sm"> Sign in</span>
                              <FaRegUser className="w-4 h-4" />
                            </Link>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-lg">Browser</h3>
                            <h3 className="text-2xl px-2">Amazon</h3>
                          </div>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-close mb-3"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <AiOutlineClose
                      className="mt-4 ml-8"
                      style={{ fontSize: "30px", color: "white" }}
                    />{" "}
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <SideMenuSm />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <Link to="/">
                <img
                  src="https://pngimg.com/d/amazon_PNG25.png"
                  alt="amazon_logo"
                  className="text-white bg-transparent mt-2"
                  style={{ height: "40px", width: "100px" }}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <Link to="/signin">
              <div className="flex flex-row text-white">
                <h3 className="text-sm">Sign in</h3>
                <span>
                  <MdKeyboardArrowRight className="mt-1" />
                </span>
                <span>
                  <FaRegUser className="w-5 h-5" />{" "}
                </span>
              </div>
            </Link>

            <div className="text-white">
              <BiCartAdd className="w-9 h-9" />
            </div>
          </div>
        </div>

        <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control w-1/2"
              placeholder="Search Amazon.in"
              aria-label="Search Amazon.in"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-amber-400" id="basic-addon2">
              <BsSearch />
            </span>
          </div>
        </div>

        <div className="mb-1 mt-1">
          <Location />
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="bg-darkBackground-800 w-full px-1 ">
        <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden Navbar_lg ">
          <NavbarLg />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:flex sm:hidden navbar_md">
          <NavbarMd />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex Navbar_sm">
          <Navbarsm />
        </div>
      </div>
    </>
  );
};

export default Navbar;
