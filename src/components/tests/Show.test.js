import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import Loading from "../Loading";

const testShow = {
  image: "",
  name: "",
  seasons: [{}, {}, {}, {}, {}],
  summary: "",
};

test("renders without errors", () => {
  render(<Show />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);
  expect(<Loading />).toBeInTheDocument;
});

test("renders same number of options seasons are passed in", () => {
  render(<Show epidosdes={testShow} />);
});

test("handleSelect is called when an season is selected", () => {
  render(<Show />);
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
