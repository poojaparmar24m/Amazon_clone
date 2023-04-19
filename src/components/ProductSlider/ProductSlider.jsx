import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../ProductCarousel/Arrow";
import Products from "../Products/Products";

const ProductSlider = ({ title, product, config }) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <>
      <div className="card  rounded-sm flex gap-2 bg-slate-50">
        <h3 className=" px-3 py-2 text-xl font-bold">{title}</h3>
        {config && (
          <Slider {...config}>
            {product.map((each, index) => (
              <Products {...each} key={index} />
            ))}
          </Slider>
        )}
        {!config && (
          <Slider {...settings}>
            {product.map((each, index) => (
              <Products {...each} key={index} />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default ProductSlider;
