import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
    },
    removeFavorite: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
