import { emailAction } from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "idle",
  messages: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(emailAction.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    });
    builder.addCase(emailAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(emailAction.rejected, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    });
  },
});

export default emailSlice.reducer;
