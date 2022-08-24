import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice } from './slices/favorites/favoritesSlice'
import { meetupSlice } from './slices/meetup/meetupSlice'

export const store = configureStore({
  reducer: {
    meetups: meetupSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
})