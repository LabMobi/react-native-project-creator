import {createSlice} from '@reduxjs/toolkit';
import {ThemeMode} from '../utils/enums/theme';

const initialState = {
  mode: ThemeMode.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: state => {
      if (state.mode === ThemeMode.DARK) {
        state.mode = ThemeMode.LIGHT;
      } else {
        state.mode = ThemeMode.DARK;
      }
    },
  },
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;
