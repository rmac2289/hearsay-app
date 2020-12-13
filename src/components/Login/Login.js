import React, { useState } from "react";
import { Button, Input } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import "./Login.css";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../../Utils/LoadingIndicator";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  // set username in session storage and redirect to homepage on login //
  const onLoginSuccess = (user_name) => {
    sessionStorage.setItem("username", user_name.value);
    history.push("/");
  };

  // handles login and authentication //
  const handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    setError(null);
    const { user_name, password } = e.target;
    trackPromise(
      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then((res) => {
          TokenService.saveAuthToken(res.authToken);
          if (TokenService.hasAuthToken()) {
            return onLoginSuccess(user_name);
          }
          user_name.value = "";
          password.value = "";
        })
        .catch((res) => setError(res.error))
    );
  };

  return (
    <div className="loginpage">
      <Burger />
      <Nav />
      <section className="forgot">
        <h3 id="access">log in to access reviews and discussion forum!</h3>
        <form onSubmit={handleSubmitJwtAuth}>
          <div role="alert">{error && <p id="incorrect">{error}</p>}</div>
          <div id="label" className="user_name">
            <label id="label" htmlFor="LoginForm__user_name">
              Username
            </label>
            <Input required name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <div id="label" className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <Input
              required
              name="password"
              type="password"
              id="LoginForm__password"
            ></Input>
          </div>
          <Button id="loginsubmit" type="submit">
            <LoadingIndicator />
            Login
          </Button>
          <h4>
            <Link id="loginSignup" to="/Register">
              First time? Register!
            </Link>
          </h4>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default LoginForm;
