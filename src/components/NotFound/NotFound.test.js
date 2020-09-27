import React from "react";
import NotFound from "./NotFound";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <NotFound />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
