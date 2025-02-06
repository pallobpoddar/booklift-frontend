import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authId: null,
  profileId: null,
	name: null,
  email: null,
  role: null,
	phone: null,
  address: null,
};

const userSlice = createSlice({
	name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.authId = action.payload.authId;
      state.profileId = action.payload.profileId;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
    signOut: (state) => {
      state.authId = null;
      state.profileId = null;
      state.name = null;
      state.email = null;
      state.role = null;
      state.phone = null;
      state.address = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
