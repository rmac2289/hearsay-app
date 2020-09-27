import React from "react";
import Departments from "./Departments";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Departments />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
