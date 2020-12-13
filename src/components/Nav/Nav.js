import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";

const Nav = () => {
  // remove user's auth token on logout //
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    sessionStorage.removeItem("username");
  };

  const renderLogoutLink = () => {
    return (
      <Link className="navLink" onClick={handleLogoutClick} to="/">
        Logout
      </Link>
    );
  };
  const renderLoginLink = () => {
    return (
      <>
        <li>
          <Link className="navLink" to="/Login">
            Login
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/Register">
            Register
          </Link>
        </li>
      </>
    );
  };
  return (
    <>
      <nav>
        <h5 id="linkLogo">
          <Link id="navLogo" to="/">
            hearsay{" "}
            <span>
              <FontAwesomeIcon id="bullhorn" icon={faBullhorn} />
            </span>
          </Link>
        </h5>

        {/* render logout link if user has auth token, login link if no token */}
        <ul>
          {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/Reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/Forum">
              Forum
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
