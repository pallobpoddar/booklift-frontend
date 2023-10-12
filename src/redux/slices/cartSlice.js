import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookList: [],
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addBook: (state = initialState, action) => {
			(state.bookList = [...state.bookList, action.payload]),
				(state.total = state.total + action.payload.object.price);
		},

		deleteBook: (state = initialState, action) => {
			state.bookList = state.bookList.filter(
				(book) => book.id !== action.payload.id
			);
			state.total = state.total - action.payload.price;
		},
	},
});

export const { addBook, deleteBook } = cartSlice.actions;
export default cartSlice.reducer;
