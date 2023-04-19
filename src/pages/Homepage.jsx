// import axios from "axios";
import React, { useContext, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import { ProductCardOne } from "../components/ProductCard/ProductCard";
import { dataContext } from "../Context/ContextApi";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import axios from "axios";
import "../Css/style.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const {
    productCardOne,
    ElectroProduct,
    setElectroProduct,
    GroceryProduct,
    setGroceryProduct,
    SkinProduct,
    setSkinProduct,
    SmartphoneProduct,
    setSmartphoneProduct,
  } = useContext(dataContext);

  useEffect(() => {
    const requestToLaptop = async () => {
      const getLaptop = await axios.get(
        "https://dummyjson.com/products/category/laptops"
      );
      setElectroProduct(getLaptop.data.products);
    };
    requestToLaptop();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const requestToSmartphone = async () => {
      const getPhones = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      setSmartphoneProduct(getPhones.data.products);
    };
    requestToSmartphone();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const requestToGrocery = async () => {
      const getGrocery = await axios.get(
        "https://dummyjson.com/products/category/groceries"
      );
      setGroceryProduct(getGrocery.data.products);
    };
    requestToGrocery();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const requestToSkin = async () => {
      const getskinCare = await axios.get(
        "https://dummyjson.com/products/category/skincare"
      );
      setSkinProduct(getskinCare.data.products);
    };
    requestToSkin();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        style={{ width: "100%", overflow: "hidden", height: "max-content" }}
        className="bg-slate-100"
      >
        <div
          className="relative main_Carousle_div"
          style={{
            width: "100%",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <ProductCarousel />
        </div>
        <div className="container mx-auto absolute top-96 ml-3  2xl:left-1 xl:left-28 lg:left-28 md:left-20 sm:left-3 items-center product_main_div">
          <div>
            {" "}
            <ProductCardOne
              title="Amazon Brands & more"
              subtitle="Shop Now"
              productCardOne={productCardOne}
            />
          </div>
        </div>

        <div className="container mt-40 2xl:mt-44 xl:mt-40 lg:mt-36  mx-auto product_slider  ">
          <ProductSlider
            product={ElectroProduct}
            title="Best Seller in  Laptop"
          />
        </div>

        <div className="container mt-3  left-24 2xl:left-24 xl:left-24 lg:left-20 md:left-20 sm:left-12 mx-auto product_slider  ">
          <ProductSlider
            product={GroceryProduct}
            title="Frequently repurchased in Grocery"
          />
        </div>
        <div className="container mt-3  left-24 2xl:left-24 xl:left-24 lg:left-20 md:left-20 sm:left-12 mx-auto product_slider  ">
          <ProductSlider product={SkinProduct} title="SkinCare Items" />
        </div>
        <div className="container mt-3 mb-4  left-24 2xl:left-24 xl:left-24 lg:left-20 md:left-20 sm:left-12 mx-auto product_slider  ">
          <ProductSlider
            product={SmartphoneProduct}
            title="Best Seller In Samrtphones"
          />
        </div>
      </div>
      <div className="my-4">
        <hr />
      </div>

      <div className="flex flex-col gap-2 my-4 mt-3 items-center">
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

export default DefaultLayout(Homepage);
