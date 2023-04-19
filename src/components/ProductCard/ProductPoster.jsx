import React from "react";
import "../../Css/style.css";

export const ProductPosterOne = (props) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="card bg-slate-50 rounded-none">
          <div className="card-body">
            <h5 className="card-title text-lg font-bold pb-1 ">
              {props.title}
            </h5>

            <div className="w-full h-full">
              <img
                src={props.backdrop_path}
                alt="product_image"
                className="object-cover object-center "
              />
              <h3 className="text-sm pt-2">{props.original_title}</h3>
            </div>

            <h3 className="text-sm text-teal-700 cursor-pointer pt-3">
              {props.subtitle}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
