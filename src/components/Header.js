import React from "react";
import ajiobrandlogo from "../images/ajiobrandlogo.png";
import cart from "../images/cart.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navbaroptions = ["MEN", "WOMEN", "KIDS", "BEAUTY", "HOME AND KITCHEN"];
  return (
    <div className="w-[100%] border-t-4 border-t-[#2c4152] border-b border-b-[#e0e0e0] flex flex-row shadow-md shadow-gray-300 h-22">
      <div className="ml-[10%]">
      <Link to="/">
        <img className="h-24" src={ajiobrandlogo} />
      </Link>
        </div>
      <div className="w-[68%]">
        <div>
          <ul className="flex flex-row font-normal  text-sm text-gray-600 justify-end ">
            <li className=" p-2 hover:underline cursor-pointer text-[13px]">
              Sign In / Join AJIO
            </li>
            <li className=" p-2 hover:underline cursor-pointer text-[13px]">
              Customer Care
            </li>
            <li className="bg-black text-white p-2 hover:underline cursor-pointer text-[13px]">
              Visit AJIOLUXE
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-end h-15 mt-3">
          <ul className="flex flex-row mr-4">
            {navbaroptions.map((item, index) => (
              <li key={index} className="cursor-pointer text-gray-700 p-2 mx-2">
                {item}
              </li>
            ))}
          </ul>
          <input
            className="bg-[#fffded] pl-[20px] pr-[12px] mx-2 h-[34px] border border-black rounded-full w-[28%]"
            type="search"
            placeholder="Search AJIO "
          ></input>
          <img
            className=""
            src="https://assets.ajio.com/static/img/wishlistIcon.svg"
          />
          <div className="mx-2 h-9 w-9 rounded-[50%] bg-[#2c4152] cursor-pointer">
            <Link to="/cart">
              <img className="h-6 w-6 m-1 ml-1" src={cart} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
