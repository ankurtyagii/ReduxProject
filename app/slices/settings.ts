import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    font: 12
}

const setting = createSlice({
    name: "setting",
    initialState,
    reducers: {
      updateFontSize(state, action: any) {
        const { payload } = action;
        state.font = payload;
      }
    },
});

export const {
    updateFontSize,
} = setting.actions;

export default setting.reducer;
