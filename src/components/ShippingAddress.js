import React, { useState } from "react";
import location from "../images/location.png";
import AddressForm from "./AddressForm.js"
import UserAddress from "./UserAddress.js"

const ShippingAddress = () => {
  const [isSampleVisible, setIsSampleVisible] = useState(false);

  const toggleSampleVisibility = () => {
    setIsSampleVisible(!isSampleVisible);
  };

  const closeSample = () => {
    setIsSampleVisible(false);
  };

  return (
    <div className="">
      <div className="flex flex-row pb-6">
        <img className="h-10 w-10 ml-8 mt-1" src={location} alt="Location" />
        <div>
          <div className="font-semibold px-2 pb-2">Delivery Address</div>
          <div className="text-[#666] text-sm px-2 pb-2">
            We will deliver your order to this address
          </div>
        </div>
      </div>
      <button
        className="text-[#176c93] font-semibold text-sm ml-8"
        onClick={toggleSampleVisibility}
      >
        Add New Address
      </button>
      <AddressForm isVisible={isSampleVisible} onClose={closeSample} />
      <UserAddress/>
    </div>
  );
};

export default ShippingAddress;
