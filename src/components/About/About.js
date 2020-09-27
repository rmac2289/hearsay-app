import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Utils/Utils";

export default function About() {
  return (
    <section>
      <header>
        <h2>
          make your voice heard{" "}
          <span>
            <FontAwesomeIcon id="bigbullhorn" icon={faBullhorn} />
          </span>
        </h2>
      </header>
      <p>
        Hearsay allows you to get your voice out regarding contacts with law
        enforcement and the criminal justice system. This isn't simply a place
        to complain - no matter the nature of the experience; good, bad, ugly -
        this is the place to make yourself heard. If you're already signed up,
        click below to leave a review - if not, scroll down and get yourself
        signed up!
      </p>
      <div className="reviewLink">
        <Button>
          <Link id="aboutLink" to="/Reviews">
            rate your encounter
          </Link>
        </Button>
      </div>
    </section>
  );
}
