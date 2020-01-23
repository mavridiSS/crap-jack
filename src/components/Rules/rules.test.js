import React from "react";
import ReactDOM from "react-dom";
import Rules from "./index";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Rules />
    </MemoryRouter>,
    div
  );
});
