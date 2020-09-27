import React from "react";
import Conversation from "./Conversation";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Conversation />
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
