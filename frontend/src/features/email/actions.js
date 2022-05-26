import emailAPI from "../../api/emailAPI";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const emailAction = createAsyncThunk(
  "email/register",
  async (address, { rejectWithValue }) => {
    try {
      const response = await emailAPI.registerAddress(address);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
