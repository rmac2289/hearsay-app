import React from "react";
import "./Landing.css";
import Header from "../Header/Header";
import Signup from "../Signup/Signup";
import Community from "../Community/Community";
import Conversation from "../Conversation/Conversation";
import About from "../About/About";
import TryApp from "../TryApp/TryApp";
import Social from "../Social/Social";

export default function Landing() {
  return (
    <div className="mainDiv">
      <Header />
      <div className="landingContainer">
        <div className="sectionContainer">
          <About />
          <TryApp />
          <Community />
          <Conversation />
          <Signup />
        </div>
      </div>
    </div>
  );
}
