/* eslint-disable testing-library/no-debugging-utils */
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../../store/slices/favorites/favoritesSlice";
import { meetupSlice } from "../../store/slices/meetup/meetupSlice";
import { screen, render, fireEvent } from "@testing-library/react";
import { NewMeetupForm } from "./NewMeetupForm";

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

describe("<NewMeetupForm/>", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Should match with snapshot", () => {
    const view = render(
      <Provider store={store}>
        <NewMeetupForm />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });

  test("Should change the value from the inputs", () => {
    render(
      <Provider store={store}>
        <NewMeetupForm />
      </Provider>
    );
    const inputTitle = screen.getByTestId("title");
    const inputImage = screen.getByTestId("image");
    const inputAdress = screen.getByTestId("address");
    const inputDescription = screen.getByTestId("description");

    fireEvent.input(inputTitle, { target: { value: "Toscana" } });
    fireEvent.input(inputImage, {
      target: {
        value:
          "https://viajes.nationalgeographic.com.es/medio/2021/05/13/siena_e5a8a829_800x800.jpg",
      },
    });
    fireEvent.input(inputAdress, { target: { value: "Italy" } });
    fireEvent.input(inputDescription, {
      target: { value: "Paisaje de la Toscana" },
    });

    expect(inputTitle.value).toBe("Toscana");
    expect(inputImage.value).toBe(
      "https://viajes.nationalgeographic.com.es/medio/2021/05/13/siena_e5a8a829_800x800.jpg"
    );
    expect(inputAdress.value).toBe("Italy");
    expect(inputDescription.value).toBe("Paisaje de la Toscana");
  });
});
