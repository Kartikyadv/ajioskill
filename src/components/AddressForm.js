import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/userAddressSlice";

const AddressForm = ({ isVisible, onClose }) => {
  const sampleRef = useRef(null);
  const dispatch = useDispatch();

  // Close component if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sampleRef.current && !sampleRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const [formData, setFormData] = useState([{
    name: "",
    mobile: "",
    pinCode: "",
    street: "",
    buildingName: "",
    landmark: "",
    city: "",
    state: "",
    addressType: "Home",
    defaultAddress: false,
  }]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addAddress(formData));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      mobile: "",
      pinCode: "",
      street: "",
      buildingName: "",
      landmark: "",
      city: "",
      state: "",
      addressType: "Home",
      defaultAddress: false,
    });
  };

  return (
    <div
      ref={sampleRef}
      className={`absolute top-0 right-0 w-[30%] bg-white shadow-lg transition-transform transform ${
        isVisible ? "-translate-x-0 ease-in" : "translate-x-full ease-out"
      }`}
    >
      <form className="" onSubmit={handleSubmit}>
        <div className="p-4">
          <h2 className="text-xl mb-4 font-light font-serif">
            Add new address
          </h2>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Mobile*
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Pin Code*
            </label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Locality / Area / Street*
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Flat number / Building Name*
            </label>
            <input
              type="text"
              name="buildingName"
              value={formData.buildingName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Landmark
            </label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              District/City*
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              State*
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-[#6d6d6d]">
              Address Type
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="addressType"
                  value="Home"
                  checked={formData.addressType === "Home"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Home
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="addressType"
                  value="Work"
                  checked={formData.addressType === "Work"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Work
              </label>
              <label>
                <input
                  type="radio"
                  name="addressType"
                  value="Others"
                  checked={formData.addressType === "Others"}
                  onChange={handleChange}
                  className="mr-1"
                />
                Others
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="defaultAddress"
                checked={formData.defaultAddress}
                onChange={handleChange}
                className="mr-2"
              />
              Make as default Address
            </label>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleReset}
              className=" text-[#866528] px-4 py-2 w-full"
            >
              RESET
            </button>
            <button
              type="submit"
              className="bg-[#866528] text-white px-4 py-2 w-full"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
