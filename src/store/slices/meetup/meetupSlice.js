import { createSlice } from "@reduxjs/toolkit";

export const meetupSlice = createSlice({
  name: "meetups",
  initialState: {
    meetups: [],
  },
  reducers: {
    setMeetups: (state, action) => {
      state.meetups = action.payload;
    },
    addMeetup: (state, action) => {
      state.meetups = [action.payload, ...state.meetups];
    },
  },
});

export const { setMeetups, addMeetup } = meetupSlice.actions;
