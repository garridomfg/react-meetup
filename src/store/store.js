import { configureStore } from '@reduxjs/toolkit'
import { meetupSlice } from './slices/meetup/meetupSlice'

export const store = configureStore({
  reducer: {
    meetups: meetupSlice.reducer
  },
})