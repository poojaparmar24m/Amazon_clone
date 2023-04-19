import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../Css/style.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import SideMenuLg from "../SideMenuNavbar/SideMenuLg";

const Productnavbar = () => {
  return (
    <>
      <div className="w-full bg-slate-700 text-white py-0.5 2xl:flex xl:flex lg:flex md:flex sm:hidden product_navbar">
        <div className="flex items-center gap-2 px-2 ">
          <div className="items-center outer_box p-2">
            <div>
              <button
                className="navbar-toggler flex gap-1 items-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbarLg"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <RxHamburgerMenu className=" text-xl font-bold" />
                <h3 className="text-md font-semibold">All</h3>
              </button>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasNavbarLg"
                aria-labelledby="offcanvasNavbarLabelLg"
              >
                <div className="offcanvas-header bg-slate-700 text-white">
                  <Link to="/signin">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabelLg">
                      <div className="flex gap-2 items-center px-2">
                        <FaUserCircle className="text-2xl" />
                        <span className="text-lg font-bold">
                          {" "}
                          Hello, sign in
                        </span>
                      </div>
                    </h5>
                  </Link>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <AiOutlineClose
                      className="text-white ml-10"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                </div>

                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-between  flex-grow-1 pe-3">
                    <li className="nav-item">
                      <SideMenuLg />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="outer_box  p-2">
            <Link to="/">
              <h3 className="text-md font-semibold">Amazon miniTV</h3>{" "}
            </Link>
          </div>
          <div className="outer_box  p-2">
            <Link to="/">
              <h3 className="text-md font-semibold">Sell</h3>
            </Link>
          </div>
          <div className="outer_box  p-2">
            <Link to="/">
              <h3 className="text-md font-semibold">Best seller </h3>
            </Link>
          </div>
          <div className="outer_box  p-2">
            <Link to="/">
              <h3 className="text-md font-semibold">Mobiles</h3>
            </Link>
          </div>
          <div className="outer_box  p-2">
            <Link to="/">
              <h3 className="text-md font-semibold">Today's Deals</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productnavbar;
