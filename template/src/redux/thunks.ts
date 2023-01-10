import {services} from '../api/services/services';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setIsSplasLoading} from './appSlice';

export const getListsThunk = createAsyncThunk<[], undefined, {}>(
  'getLists',
  async (undefined, {dispatch}) => {
    const data = await services.getLists();
    dispatch(setIsSplasLoading(false));

    return data;
  },
);
