import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	bookList: [],
};

const bookSlice = createSlice({
	name: "filteredBooks",
	initialState,
	reducers: {
		changeBookList: (state = initialState, action) => {
			state.bookList = action.payload;
		},
	},
});

export const { changeBookList } = bookSlice.actions;
export default bookSlice.reducer;
