import React from "react";
import { ProductPosterOne } from "./ProductPoster";

export const ProductCardOne = ({ title, subtitle, productCardOne }) => {
  return (
    <>
      <div className=" grid grid-cols-4 gap-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 prodcut_card">
        {productCardOne.map((item, key) => (
          <ProductPosterOne
            {...item}
            key={key}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </>
  );
};
