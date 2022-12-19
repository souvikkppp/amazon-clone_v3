import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

//this is redux like a global store to store users items data 
//when users put the items in the shopping cart
export const store = configureStore({
  reducer: {
    busket: basketReducer,
  },
});

