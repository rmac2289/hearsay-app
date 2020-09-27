import React from "react";
import About from "./About";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <About />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
