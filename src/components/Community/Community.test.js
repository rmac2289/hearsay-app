import React from "react";
import Community from "./Community";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Community />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
