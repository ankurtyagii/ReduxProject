import { createAsyncThunk } from "@reduxjs/toolkit";

import { createInstance } from "../utils/axios";

export const getSamples = createAsyncThunk(
  "getSample",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await createInstance({
        url: "hitsSingleSeason",
      });
      return data;
    } catch (e) {
      return rejectWithValue(`Error while data - ${params}`);
    }
  }
);