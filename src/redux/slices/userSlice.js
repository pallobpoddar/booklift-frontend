import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUserInfo: (state, action) => {
			state.email = action.payload.email;
		},
	},
});

export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;
