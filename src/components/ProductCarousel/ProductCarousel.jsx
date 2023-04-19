import React, { useState } from "react";
import Slider from "react-slick";
import "../../Css/style.css";
import { NextArrow, PrevArrow } from "./Arrow";

const ProductCarousel = () => {
  const [caroselImage, setCaroselimage] = useState([
    {
      id: 610150,
      backdrop_path:
        "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
    },
    {
      id: 610251,
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/BigBathroom/Hi-Big-bathroom-sale-_pc_hero_3000x1200_lifestyle_un-rec._CB592139723_.jpg",
    },
    {
      id: 610352,
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/GW/BVD/pc_hero_3000x1200_OUTDOOR-2X._CB592078391_.jpg",
    },
    {
      id: 610453,
      backdrop_path:
        "https://m.media-amazon.com/images/I/71YEY+JRlKL._SX3000_.jpg",
    },
    {
      id: 610554,
      backdrop_path:
        "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
    },
    {
      id: 610655,
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/BVD-Apr/Deals-3000-Unrec-PC._CB591758540_.jpg",
    },
  ]);

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div
        className="2xl:block xl:block lg:block md:hidden sm:hidden productCarosel_Lg"
        style={{ height: "450px" }}
      >
        <Slider {...settings}>
          {caroselImage.map((images) => (
            <div className="w-full " key={images.id}>
              <img
                src={images.backdrop_path}
                alt="product_backdropPath"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="2xl:hidden xl:hidden lg:hidden md:block sm:hidden productCarosel_md"
        style={{ height: "500px" }}
      >
        <Slider {...settings}>
          {caroselImage.map((images) => (
            <div className="w-full" key={images.id}>
              <img
                src={images.backdrop_path}
                alt="product_backdropPath"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block productCarosel_sm"
        style={{ height: "530px" }}
      >
        <Slider {...settings}>
          {caroselImage.map((images) => (
            <div className="w-full" key={images.id}>
              <img
                src={images.backdrop_path}
                alt="product_backdropPath"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductCarousel;
