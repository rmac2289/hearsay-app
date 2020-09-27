import React from "react";
import Comment from "./Comment";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Comment />, div);
  ReactDOM.unmountComponentAtNode(div);
});
