import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  user_id: number;
  basketTotal: number;
  deliveryAddress: string
}

const initialState: UserState = {
  username: "",
  user_id: 0,
  basketTotal: 0,
  deliveryAddress: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserID: (state, action: PayloadAction<number>) => {
      state.user_id = action.payload;
    },
    logoutUser: (state) => {
      state.username = "";
      state.user_id = 0;
    },
    setBasketTotal: (state, action: PayloadAction<number>) => {
      state.basketTotal = action.payload;
    },
    setDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const { setUsername, setUserID, logoutUser, setBasketTotal, setDeliveryAddress } =
  userSlice.actions;

const serializedState = localStorage.getItem("reduxState");
const preloadedState = serializedState
  ? JSON.parse(serializedState)
  : undefined;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("reduxState", JSON.stringify(state));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
