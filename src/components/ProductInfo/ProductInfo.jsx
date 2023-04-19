import React, { useContext } from "react";
import { dataContext } from "../../Context/ContextApi";
import {
  BsFillStarFill,
  BsCurrencyRupee,
  BsPercent,
  BsArrowRight,
} from "react-icons/bs";
import "../../Css/style.css";

const ProductInfo = () => {
  const { productDetails } = useContext(dataContext);
  return (
    <>
      <div className="flex gap-5 py-3 px-2 product_info">
        <div className=" w-72 h-72">
          <img
            src={productDetails.thumbnail}
            alt="product_image"
            className="w-full h-full object-cover object-center rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2 py-2 px-2 w-1/2 productInfo">
          <h3 className="text-2xl font-semibold">{productDetails.title}</h3>
          <div className="flex gap-2">
            <BsFillStarFill className="text-xl text-orange-400 mt-0.5" />
            <span>{productDetails.rating} ratings</span>
          </div>
          <div className="my-1">
            <hr />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-3">
              <div className="flex gap-1 text-lg text-red-500">
                <span>{productDetails.discountPercentage}</span>
                <BsPercent className="mt-1.5" />
              </div>
              <div className="flex">
                <BsCurrencyRupee className="text-sm mt-1" />
                <span className="text-2xl font-semibold">
                  {productDetails.price}
                </span>
              </div>
            </div>
            <h3
              className="flex gap-0.5 text-gray-600"
              style={{ fontSize: "12px" }}
            >
              M.R.P: <BsCurrencyRupee className="mt-0.5" />
              {productDetails.price}
            </h3>
          </div>
          <div className="my-2">
            <hr />
          </div>
          <h3 className=" text-sm text-gray-900 font-semibold">
            Available Stock : {productDetails.stock}
          </h3>
          <h3 className="text-gray-900 text-sm font-semibold">
            Brand : {productDetails.brand}
          </h3>
          <div className="my-2">
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">About This Product</h3>
            <p className="pt-1 px-1 flex gap-2">
              {" "}
              <BsArrowRight className="text-2xl" />{" "}
              <span className="text-sm text-gray-600">
                {productDetails.description}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
