import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

test("cards render", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/card_display/i);
});

test("navbar renders", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/nav_display/i);
});

test("darkmode button works", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("Dark Mode"));
});
