import { createSlice } from "@reduxjs/toolkit";

interface BasketItem {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

const initialState = {
  items: [] as BasketItem[],
};

export const basketSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id)
    
      let newBasket = [...state.items];

      if (index >= 0){
        //if item exists in the basket remove it ...
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove (id: ${action.payload.id}) because its not in busket`)
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.busket.items;
export const selectTotal = (state: any) => state.busket.items.reduce((total:any, item:any) => total + item.price, 0);
 const basketReducer = basketSlice.reducer;
 export default basketReducer;
