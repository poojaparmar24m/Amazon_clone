import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Productnavbar from "../components/ProductNavbar/Productnavbar";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Productnavbar />
        <Component {...props} />
        <h1>Footer</h1>
      </>
    );
  };

export default DefaultLayout;
