import React from "react";
import Landing from "./Landing";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Landing />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
