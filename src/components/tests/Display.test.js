import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./../Display";
import Show from "../Show";

test("renders without errors with no props", async () => {
  render(<Display />);
});

test("renders Show component when the button is clicked ", () => {
  render(<Display />);
  const button = screen.getByTestId("button-test");

  fireEvent.click(button);
  expect(<Show />).toBeInTheDocument;
});

test("renders show season options matching your data when the button is clicked", () => {
  render(<Display />);
  const button = screen.getByTestId("button-test");
  const seasonOptions = screen.findAllByTestId("season-option");
  fireEvent.click(button);
  expect(seasonOptions).toBeInTheDocument;
});
