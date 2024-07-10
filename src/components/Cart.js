import React from "react";
import CartProducts from "./CartProducts.js";
import CartItems from "./CartItems.js";
import Billing from "./Billing.js";
import PreFooter from "./PreFooter.js";
import Footer from "./Footer.js";
import { useSelector } from "react-redux";

const Cart = () => {
  return (
    <div className="w-full">
      <img
        className=""
        src="https://assets.ajio.com/cms/AJIO/WEB/2192023-PLPStrip-RelianceOne-Points-1440x128.jpg"
      />
      <div className="flex flex-row mt-7">
        <div className="w-[75%]" >
          <CartItems/>
        </div>
        <div className="w-[25%]">
          <Billing />
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Cart;
