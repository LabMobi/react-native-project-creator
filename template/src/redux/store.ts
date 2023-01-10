import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    appState: appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
