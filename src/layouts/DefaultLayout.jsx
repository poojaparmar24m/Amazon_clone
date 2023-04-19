import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Productnavbar from "../components/ProductNavbar/Productnavbar";
import Footer from "../components/Footer/Footer";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Productnavbar />
        <Component {...props} />
        <Footer />
      </>
    );
  };

export default DefaultLayout;
