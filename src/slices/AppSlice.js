import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { favourites : [], temperatureUnit: 'C', windUnit: "kmh" },
  reducers: {
    updateFavourites: (state, action) => {
      state.favourites = action.payload;
    },
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
    setWindUnit: (state, action) => {
      state.windUnit = action.payload;
    }
  },
});

export const { updateFavourites, setTemperatureUnit, setWindUnit } = appSlice.actions;
export default appSlice.reducer;
