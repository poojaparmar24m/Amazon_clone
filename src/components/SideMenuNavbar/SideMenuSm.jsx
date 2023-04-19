import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import "../../Css/style.css";

const SideMenuSm = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 justify-between text-gray-800">
          <span className="text-lg font-bold"> Amazon Home</span>
          <AiOutlineHome className="text-2xl " />
        </div>
        <div className="my-1">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-black text-xl font-bold">Trending</h3>
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
        <div className="my-1">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-black text-xl font-bold">
            Top Categories For You
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Mobiles</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Computers</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Books</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Amazon Fashion</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>See All Categories</Link>
          </h3>
        </div>
        <div className="my-1">
          <hr />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-black text-xl font-bold">Programs & Features</h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Today's deals</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Amazon Pay</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Try Prime</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Sell on Amazon</Link>
          </h3>
          <h3 className="text-gray-950 text-sm">
            <Link>Style Feed</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SideMenuSm;
