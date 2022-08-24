/* eslint-disable testing-library/no-debugging-utils */
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../../store/slices/favorites/favoritesSlice";
import { meetupSlice } from "../../store/slices/meetup/meetupSlice";
import { MeetupItem } from "./MeetupItem";
import { screen, render } from "@testing-library/react";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    meetups: meetupSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

const initialState = {
  id: "m1",
  title: "This is a first meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Meetupstreet 5, 12345 Meetup City",
  description:
    "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
};

describe("<MeetupItem/>", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Should match with snapshot", () => {
    const view = render(
      <Provider store={store}>
        <MeetupItem item={initialState} />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  test("Should show the image with the indicated URL and ALT", () => {
    render(
      <Provider store={store}>
        <MeetupItem item={initialState} />
      </Provider>
    );
    expect(screen.getByRole("img").src).toBe(initialState.image);
    expect(screen.getByRole("img").alt).toBe(initialState.title);
  });

  test("Items should have text", () => {
    render(
      <Provider store={store}>
        <MeetupItem item={initialState} />
      </Provider>
    );
    expect(screen.getByText(initialState.title)).toBeTruthy();
    expect(screen.getByText(initialState.address)).toBeTruthy();
    expect(screen.getByText(initialState.description)).toBeTruthy();
  });
});
