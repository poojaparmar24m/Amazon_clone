import React from "react";
import { Link } from "react-router-dom";
import Location from "./Location";
import Search from "./Search";
import Language from "./Language";
import SignIn from "./SignIn";
import { BiCartAdd } from "react-icons/bi";

const NavbarLg = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="p-1">
          <Link to="/">
            <img
              src="https://pngimg.com/d/amazon_PNG25.png"
              alt="amazon_logo"
              className="text-white bg-transparent"
              style={{ height: "50px", width: "120px" }}
            />
          </Link>
        </div>
        <div className="p-1">
          <Location />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Link to="/">
            <Language />
          </Link>
        </div>
        <div>
          <Link to="/signin">
            <SignIn />
          </Link>
        </div>
        <div>
          <Link to="/signin">
            <div className="flex flex-col text-white">
              <h6 style={{ fontSize: "13px" }}>Returns</h6>

              <h5 className="text-sm flex font-bold ">& Orders </h5>
            </div>
          </Link>
        </div>
        <div>
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

const Navbar = () => {
  return (
    <>
      <div className="bg-darkBackground-800 px-3">
        <NavbarLg />
      </div>
    </>
  );
};

export default Navbar;
