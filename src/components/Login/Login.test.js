import React from "react";
import Login from "./Login";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Login />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
