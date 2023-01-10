//Example to show usage of async thunks and reducers with redux toolkit
import {createSlice} from '@reduxjs/toolkit';
import {getListsThunk} from './thunks';

const initialState = {
  lists: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListsThunk.fulfilled, (state, action) => {
      state.lists = action.payload;
    });
  },
});

export default listSlice.reducer;
