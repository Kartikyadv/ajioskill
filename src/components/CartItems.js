import React from "react";
import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";

const CartItems = () => {
  const products = useSelector((store) => store.cart.items);
  return (
    <div className="pr-5">
      <div className="flex flex-row justify-between mb-5 h-14">
        <p className="font-serif font-extrabold text-2xl pt-2">My Bag</p>
        <p className="text-[#036cdb] h-4 mt-4 font-semibold">
          + Add from Wishlist
        </p>
      </div>
      <div>
        {products.map((product, index) => (
          <CartProducts key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
