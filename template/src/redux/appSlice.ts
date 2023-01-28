import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSplashLoading: true,
  loading: false,
  error: '',
};

export const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setIsSplasLoading: (state, action) => {
      state.isSplashLoading = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setIsSplasLoading, setLoading, setError} = appSlice.actions;

export default appSlice.reducer;
