import React from "react";
import ReactDOM from "react-dom";
import Player from "./index";
import { render } from "@testing-library/react";

const mockData = [
  {
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: "KING",
    suit: "HEARTS",
    code: "KH"
  },
  {
    image: "https://deckofcardsapi.com/static/img/8C.png",
    value: "8",
    suit: "CLUBS",
    code: "8C"
  }
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Player cards={mockData} />, div);
});

it("renders cards score", () => {
  const { getByTestId } = render(<Player cards={mockData} reveal={true} />);
  const element = getByTestId("score");
  expect(element.textContent).toBe("player score: 18");
});
