import { createSlice } from "@reduxjs/toolkit";

export const meetupSlice = createSlice({
  name: "meetups",
  initialState: {
    meetups: [],
  },
  reducers: {
    setMeetups: (state, action) => {
        state.meetups = action.payload
    },
  },
});

export const { setMeetups} = meetupSlice.actions;
