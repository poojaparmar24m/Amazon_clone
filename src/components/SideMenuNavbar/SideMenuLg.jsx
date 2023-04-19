import React from "react";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../../Css/style.css";

const SideMenuLg = () => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-black text-xl font-bold">Trending</h1>
          <h3 className="text-gray-950 text-sm">
            <Link>Best sellers</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>New Releases</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Movers and shakers</Link>
          </h3>
        </div>
        <div className="my-2">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-black text-lg font-bold">
            Digital Content And Devies
          </h1>
          <h3 className="text-gray-950 text-sm">
            <Link>Amazon miniTV-FREE entertainment</Link>
          </h3>
          <h3 className="text-gray-950 text-sm flex justify-between gap-1">
            <Link>Echo & Alexa</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Fire TV</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Kindle E-Readers & eBooks</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Audible Audiobooks</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Amazon Prime video</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Amazon Prime Music</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
        </div>
        <div className="my-2">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-black text-lg font-bold">Shop By category</h1>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Mobiles, Computers</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Tv,Appliances,Electronics</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Men's Fashion</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>women's Fashion</Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm flex  gap-1">
            <Link>See All</Link>
            <BiChevronDown className="text-2xl text-gray-500" />
          </h3>
        </div>
        <div className="my-2">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-black text-lg font-bold">Programs & Features</h1>
          <h3 className="text-gray-950 text-sm flex  justify-between gap-1">
            <Link>Gifts Cards & Mobile Recharge </Link>
            <BiChevronRight className="text-2xl text-gray-500" />
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Flight Tickets</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Clearance Store</Link>
          </h3>
        </div>
        <div className="my-2">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-black text-lg font-bold">Help & Settings</h1>
          <h3 className="text-gray-950 text-sm">
            <Link>Your Account</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Customer service</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link to="/signin">Sign in</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SideMenuLg;
