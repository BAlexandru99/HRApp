import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
  },
  reducers: {
    userEmail: (state, action) => {
      state.email += action.payload;
    },
  },
});

export const { userEmail } = userSlice.actions;
export default userSlice.reducer;
