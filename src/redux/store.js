import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import bookSlice from "./slices/bookSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartSlice,
		filteredBooks: bookSlice,
	},
});

export default store;
