import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: null,
	name: null,
	isAdmin: null,
};

const userSlice = createSlice({
	name: "user",
  initialState,
  reducers: {
    saveSignIn: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
    removeSignIn: (state) => {
      state.id = null;
      state.name = null;
      state.role = null;
    },
  },
});

export const { saveSignIn, removeSignIn } = userSlice.actions;
export default userSlice.reducer;
