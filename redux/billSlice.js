import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Categories: {
    id: null,
    name: null,
    quantity: null,
    price: null,
  },
};
export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setBill } = billSlice.actions;

export const selectRestaurant = (state) => state.Categories;

export default billSlice.reducer;
