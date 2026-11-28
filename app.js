/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import ProductListing from "./component/ProductListing";

const AppLayout = () => {
  return (
    <div className='container'>
      <Header />
      <ProductListing />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
