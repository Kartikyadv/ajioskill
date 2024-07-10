import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const CartProducts = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };
  const handleDeleteItem = (product) => {
    dispatch(removeItem(product));
  };

  const { name, category, price, description, sizes, colors } = product;
  return (
    <div className="h-[170px] my-3 pr-4 flex flex-row border border-[#eee]">
      <div>
        <img
          className="h-[170px] w-[160px]"
          src="https://assets.ajio.com/medias/sys_master/root/20240314/rsG4/65f3213a05ac7d77bbb7fd2c/-473Wx593H-469290316-lightolive-MODEL.jpg"
        />
      </div>
      <div className="flex flex-row w-full">
        <div className="px-4 py-3 w-[50%]">
          <p className="text-sm text-gray-600 my-2">{name}</p>
        </div>
        <div className="flex flex-row w-[20%]">
          {sizes ? (
            <div className="font-serif text-sm text-gray-600 my-2 p-2">
              Size
              <select>
                {sizes?.map((size,idx) => (
                  <option key={idx}>{size}</option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="font-serif text-sm text-gray-600 my-2 p-2">
            Qty
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="w-[30%] flex flex-col text-right">
          <div className="p-2 ">
            <span className="font-serif text-sm text-gray-600 my-2 p-2">
              Savings : 
            </span>
            <span className="font-serif text-[#866528] font-semibold text-sm">Rs.150.00</span>
          </div>
          <div className="flex flex-row justify-end">
            <p className="line-through text-sm font-semibold text-[#866528]">
              Rs. {price}.00
            </p>
            <span className="text-sm font-semibold text-[#866528] px-1">(10%)</span>
            <p className="px-[10px] text-sm font-semibold bg-[#e1ecf1] border-l-4 border-l-[#176c93]">Rs. {price - 150}.00</p>
          </div>
            <div className=" flex flex-row pt-20 end justify-between">
                <button onClick={()=>handleDeleteItem(product)} className="font-bold text-sm text-[#176d93]">Delete</button>
                <button className="font-bold text-sm text-[#176d93] flex flex-row">
                   <img className="px-2" src="https://assets.ajio.com/static/img/my-bag-wishlist-icon.svg"/>
                   Move to Wishlist</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
