import React, { useContext, useEffect } from "react";
import ProductLayout from "../layouts/ProductLayout";
import { dataContext } from "../Context/ContextApi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { NextArrow, PrevArrow } from "../components/ProductCarousel/Arrow";

const Productpage = () => {
  const { id } = useParams();
  const { setProductDetails, AllProduct, setAllProduct } =
    useContext(dataContext);

  useEffect(() => {
    const productDetail = async () => {
      const getProductDetail = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProductDetails(getProductDetail.data);
    };
    productDetail();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    const requestToAll = async () => {
      const getAllProduct = await axios.get("https://dummyjson.com/products");
      setAllProduct(getAllProduct.data.products);
    };
    requestToAll();
    // eslint-disable-next-line
  }, []);

  const ProductSettings = {
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
      <div className="my-3 container mx-auto w-full">
        <ProductInfo />
      </div>

      <div className="container mt-5 mb-4  left-24 2xl:left-24 xl:left-24 lg:left-20 md:left-20 sm:left-12 mx-auto product_slider  ">
        <ProductSlider
          config={ProductSettings}
          product={AllProduct}
          title="Get All Products"
        />
      </div>

      <div className="mt-5">
        <hr />
      </div>

      <div className="flex flex-col gap-2 mt-5 items-center">
        <h3 className="text-sm">See personalized recommendations</h3>
        <Link to="/signin">
          <button className=" px-28 bg-amber-300 text-center border rounded-md text-sm py-1 font-semibold">
            sign in
          </button>
        </Link>
        <div className="flex gap-0.5">
          <span className="text-sm">New customer?</span>
          <Link to="/signup" className="text-sm text-teal-700">
            start here.
          </Link>
        </div>
      </div>

      <div className="my-3">
        <hr />
      </div>
    </>
  );
};

export default ProductLayout(Productpage);
