import React, { createContext, useState } from "react";
export const dataContext = createContext(null);

const ContextApi = ({ children }) => {
  const [ElectroProduct, setElectroProduct] = useState([]);
  const [GroceryProduct, setGroceryProduct] = useState([]);
  const [SkinProduct, setSkinProduct] = useState([]);
  const [SmartphoneProduct, setSmartphoneProduct] = useState([]);
  const [AllProduct, setAllProduct] = useState([]);
  const [productDetails, setProductDetails] = useState([
    {
      id: "",
    },
  ]);
  const [productCardOne, setProductCardOne] = useState([
    {
      id: 610756,
      original_title: "choppers & more",
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_372x232_in-en._SY232_CB612501063_.jpg",
    },
    {
      id: 610857,
      original_title: "String ligth & more",
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/home_379._SY232_CB592083129_.jpg",
    },
    {
      id: 610958,
      original_title: "Kitchen storage & container",
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/kitchen_379._SY232_CB592083129_.jpg",
    },
    {
      id: 611059,
      original_title: "Wall Stikers & more",
      backdrop_path:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_372x232_in-en._SY232_CB612501081_.jpg",
    },
  ]);

  return (
    <>
      <dataContext.Provider
        value={{
          productCardOne,
          setProductCardOne,
          ElectroProduct,
          setElectroProduct,
          GroceryProduct,
          setGroceryProduct,
          SkinProduct,
          setSkinProduct,
          SmartphoneProduct,
          setSmartphoneProduct,
          productDetails,
          setProductDetails,
          AllProduct,
          setAllProduct,
        }}
      >
        {children}
      </dataContext.Provider>
    </>
  );
};

export default ContextApi;
