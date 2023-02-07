import React from "react";
import {
  render,
  fireEvent,
  screen,
  queryAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import Loading from "../Loading";

const testShow = {
  image: "",
  name: "",
  seasons: [
    {
      id: 0,
      name: "Season 1",
      episode: [],
    },
    {
      id: 1,
      name: "Season 2",
      episode: [],
    },
  ],
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
  render(<Show show={testShow} selectedSeason={"none"} />);
  const seasonOption = screen.queryAllByTestId("season-option");
  expect(seasonOption).toBeDefined;
  expect(seasonOption).toBeInTheDocument;
});

test("handleSelect is called when an season is selected", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
  const handle = screen.getByLabelText(/Select A Season/i);

  expect(handle).toBeCalled;
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});
