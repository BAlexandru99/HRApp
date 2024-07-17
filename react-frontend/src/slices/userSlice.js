import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userEmail: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { userEmail } = userSlice.actions;
export default userSlice.reducer;
