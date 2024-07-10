import Product from "./Product.js";
import Shimmer from "./Shimmer.js";
import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../FilterProvider.js";
import { fetchProducts } from '../redux/productSlice.js';
import { useDispatch, useSelector } from "react-redux";


const ProductList = () => {
  const [filteredProducts, setfilteredProducts] = useState(null);
  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
      setfilteredProducts(products)
    }
  }, [status, dispatch]);

  const priceRanges = { 
    "Below Rs.500 (55)": (price) => price < 500,
    "Rs.500-1000 (2,180)": (price) => price >= 500 && price <= 1000,
    "Rs.1001-1500 (2,701)": (price) => price > 1000 && price <= 1500,
    "1500 above": (price) => price > 1500,
  };
  useEffect(() => {
    const filterProducts = (products, filters) => {
      return products.filter((product) => {
        const categoryMatch =
          !filters?.Category?.length ||
          filters.Category.includes(product.category);
        const priceMatch =
          !filters?.Price?.length ||
          filters.Price.some((range) => priceRanges[range](product.price));
        return categoryMatch && priceMatch;
      });
    };
    if (products) {
      setfilteredProducts(filterProducts(products, selectedFilters));
    }
  }, [selectedFilters,products]);

  if (status == 'loading') {
    return <Shimmer />;
  }

  return (
    <div>
      {/* <select>
        <option>price lowest to highest</option>
        <option>price highest to lowest</option>
      </select> */}
    <div className="flex flex-row flex-wrap">
      {filteredProducts &&
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
    </div>
  );
};

export default ProductList;
