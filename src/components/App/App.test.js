import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
