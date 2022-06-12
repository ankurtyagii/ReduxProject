import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import settings from "./slices/settings";
import counter from "./slices/counter";

export const store = configureStore({
  reducer: {
    settings,
    counter
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;