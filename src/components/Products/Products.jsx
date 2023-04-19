import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log("propsid", props.id);
  return (
    <>
      <Link to={`/products/${props.id}`}>
        <div className="flex flex-col gap-1 items-center ">
          <div className=" w-64 h-32 2xl:w-64 2xl:h-32 xl:w-64 xl:h-32 lg:w-64 lg:h-32 md:w-60 md:h-32 sm:w-60 sm:h-32 product_slide_img">
            <img
              src={props.thumbnail}
              alt="product_image"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
          <h3 className="pb-1 text-gray-600 text-md">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default Products;
