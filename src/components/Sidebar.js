import React, { useContext, useState } from "react";
import { FilterContext } from "../FilterProvider";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleOptions, setVisibleOptions] = useState({});
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  const list = [
    {
      name: "Category",
      options: ["Clothing", "Electronics", "Footwear", "Accessories"],
    },
    {
      name: "Price",
      options: [
        "Below Rs.500 (55)",
        "Rs.500-1000 (2,180)",
        "Rs.1001-1500 (2,701)",
        "1500 above",
      ],
    },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleInnerVisible = (index) => {
    setVisibleOptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const handleCheckboxChange = (category, option) => {
    setSelectedFilters((prevState) => {
      const categoryFilters = prevState[category] || [];
      if (categoryFilters.includes(option)) {
        return {
          ...prevState,
          [category]: categoryFilters.filter((item) => item !== option),
        };
      } else {
        return {
          ...prevState,
          [category]: [...categoryFilters, option],
        };
      }
    });
  };

  return (
    <div className="w-[27%] pl-3">
      <div
        onClick={toggleVisibility}
        className="flex flex-row justify-between mt-3 cursor-pointer"
      >
        <button className="font-serif text-lg font-bold">Refine By</button>
        <p className="text-xl mr-9">^</p>
      </div>
      <div className="mt-4">
        {isVisible &&
          list.map((item, index) => (
            <div key={index} className="border-b mb-4">
              <div
                onClick={() => toggleInnerVisible(index)}
                className="flex flex-row cursor-pointer"
              >
                <span className="font-bold">- </span>
                <div className="ml-4">{item.name}</div>
              </div>
              {visibleOptions[index] && (
                <div className="ml-6 mt-2">
                  {item.options.map((option, idx) => (
                    <div key={idx} className="py-1 text-sm flex flex-row">
                      <input
                        type="checkbox"
                        checked={
                          selectedFilters[item.name]?.includes(option) || false
                        }
                        onChange={() => handleCheckboxChange(item.name, option)}
                      />
                      <div className="ml-2 text-[13px]">{option}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
