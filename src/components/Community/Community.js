import React from "react";
import "./Community.css";
import { Link } from "react-router-dom";
import { Button } from "../../Utils/Utils";

export default function Community() {
  return (
    <section>
      <header>
        <h2>see what others are saying in your community</h2>
      </header>
      <p>
        Find out what others in the country are saying about their local
        officials. Clik the link below to search by department to see reviews
        for any law enforcement in the country.
      </p>
      <div className="citySearch">
        <div>
          <Button>
            <Link id="showMe" to="/Reviews">
              show me reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
