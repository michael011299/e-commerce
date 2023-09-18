import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { ProductInfo } from "./types/productInterfaces";

export interface Item {
  data: ProductInfo;
}

interface AppState {
  items: Item[];
}

const initialState: AppState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;

export const selectItems = createSelector(
  (state: AppState) => state.items,
  (items) => items
);

const store = configureStore({
  reducer: itemsSlice.reducer,
});

export default store;
