import { createSlice } from "@reduxjs/toolkit";

const userAddressSlice = createSlice({
    name: "useraddress",
    initialState: {
        userAddress: JSON.parse(localStorage.getItem('userAddress')) || [],
    },
    reducers: {
        addAddress: (state,action) => {
            state.userAddress.push(action.payload);
          },
    }
})
export const { addAddress} = userAddressSlice.actions
export default userAddressSlice.reducer