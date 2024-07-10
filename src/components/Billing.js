import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Billing = () => {
  const CartProducts = useSelector((store)=>store.cart.items);
  let totalAmount = 0;
  CartProducts.forEach(element => {
    totalAmount = totalAmount + (element.price-150)
  });
  return (
    <div className="border border-[#eee] bg-[#fafafa]">
      <div className="p-4 text-sm">
      <div className="font-serif font-bold text-sm mb-3">Order Details</div>
      <div className=" text-[14px]">
        <div className="flex flex-row justify-between m-1">
          <div>Bag total</div>
          <div>₹ {totalAmount+(CartProducts.length*150)}.00</div>
        </div>
        <div className="flex flex-row justify-between m-1">
          <div>Bag discount</div>
          <div className="text-[#866528]">- ₹{CartProducts.length*150}.00</div>
        </div>
        <div className="flex flex-row m-1">
          <div>Convenience Fee</div>
          <div className="text-[#176d93] ml-2 text-xs mt-2">What's this?</div>
        </div>
        <div className="flex flex-row justify-between m-1">
          <div className="text-gray-600 pl-2">Delivery Fee</div>
          <div> <span className="text-[#866528]">Free </span><span className="line-through"> ₹99.00</span> </div>
        </div>
        <div className="flex flex-row justify-between m-1 py-2">
          <div className="font-semibold">Order Total</div>
          <div className="font-semibold">₹{totalAmount}.00</div>
        </div>
      </div>
      </div>
      <div>
        <Link to="/shipping">
        <button className="w-full h-[50px] bg-[#866528] text-white font-semibold">PROCCED TO SHIPPING</button>
        </Link>
      </div>
    </div>
  );
};

export default Billing;
