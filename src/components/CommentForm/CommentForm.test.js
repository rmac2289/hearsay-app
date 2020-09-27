import React from "react";
import CommentForm from "./CommentForm";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CommentForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
