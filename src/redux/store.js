import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productReducer from "./productSlice.js";
import useraddressReducer from "./userAddressSlice.js";

const saveToLocalStorage = (state,localName) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localName, serializedState);
  } catch (e) {
    console.warn(e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    useraddress: useraddressReducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().cart.items,"cartItems");
  saveToLocalStorage(store.getState().useraddress.userAddress,"userAddress");
});

export default store;
