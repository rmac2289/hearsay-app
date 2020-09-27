import React from "react";
import TryApp from "./TryApp";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TryApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
