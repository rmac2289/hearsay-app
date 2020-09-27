import React from "react";
import WriteReview from "./WriteReview";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WriteReview />, div);
  ReactDOM.unmountComponentAtNode(div);
});
