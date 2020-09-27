import React from "react";
import Review from "./Review";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const reviews = [
    {
      id: 1,
      state: "New York",
      department: "New York Police Department",
      nature: "I got pulled over for speeding",
      rating: 7,
      comments:
        "The officer was pretty respectful. He told me what I did wrong when I asked him. Only giving a 7 because the ticket is expensive.",
      experience: "good",
      encounterDate: new Date(),
      user: "rmac2289",
    },
    {
      id: 2,
      state: "New York",
      department: "New York City Police Department",
      nature:
        "cops stopped me for no reason and just started yelling at me to get on the ground",
      rating: 0,
      comments:
        "This was some serious BS. They had no right to come at me like that. If I treated them that way they would have killed me.",
      experience: "terrible",
      encounterDate: new Date("June 25, 2019 08:15:00"),
      user: "njs26",
    },
    {
      id: 3,
      state: "New York",
      department: "New York City Police Department",
      nature: "I dropped my wallet and the officer found me to return it.",
      rating: 10,
      comments:
        "I can't believe he did that, what a relief. So glad we have people like that protecting our community.",
      experience: "great",
      encounterDate: new Date("January 10, 2020 11:15:00"),
      user: "coperlover99",
    },
    {
      id: 4,
      locality: "Marin County",
      nature: "I called 9-1-1 and received outstanding service.",
      rating: 10,
      comments:
        "I talked to this dispatcher named Ross and he saved my moms life. What a guy.",
      experience: "great",
      encounterDate: new Date("August 22, 2017 16:55:00"),
      user: "definitelynotross",
    },
    {
      id: 5,
      locality: "Federal",
      nature: "I robbed this bank and the feds showed up.",
      rating: 5,
      comments:
        "They were alright. They all had guns pointed at me which wasn't cool but like I was robbing a bank so fair is fair.",
      experience: "ok",
      encounterDate: new Date("April 04, 2016 09:00:00"),
      user: "hideyomoney14",
    },
  ];
  const departments = [
    "Mountain View Police Department",
    "Marin County Sheriff's Office",
    "New York City Police Department",
    "Los Angeles Police Department",
    "San Francisco Police Department",
    "San Diego Police Department",
    "San Mateo County Sheriff's Office",
    "Federal Bureau of Investigation",
  ];
  ReactDOM.render(<Review reviews={reviews} department={departments} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
