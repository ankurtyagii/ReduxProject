import { createSlice } from "@reduxjs/toolkit";

import { getSamples } from "../api"

const initialState: any = {
    initialCount: 0,
    sample: {
      data: [],
      error: null,
      isLoading: false,
    },
}
const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment(state, action: any) {
        const { payload } = action;
        state.initialCount = payload;
      },
      decrement(state, action: any) {
        const { payload } = action;
        state.initialCount = payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getSamples.pending, (state) => {
          state.sample.data = [];
          state.sample.error = null;
          state.sample.isLoading = true;
        })
        .addCase(getSamples.fulfilled, (state, action) => {
          state.sample.data = action.payload;
          state.sample.error = null;
          state.sample.isLoading = false;
        })
        .addCase(getSamples.rejected, (state, action: any) => {
          state.sample.data = [];
          state.sample.error = action.payload;
          state.sample.isLoading = false;
        })
    }
});

export const {
    increment,
    decrement
} = counter.actions;

export default counter.reducer;
