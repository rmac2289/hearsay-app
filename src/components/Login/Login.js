import React, { Component } from 'react';
import { Button, Input } from '../../Utils/Utils';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import './Login.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../../Utils/LoadingIndicator';


export default class LoginForm extends Component {

  // set username in session storage and redirect to homepage on login //
  onLoginSuccess = (user_name) => {
      sessionStorage.setItem('username', user_name.value);
      this.props.history.push('/');
    };

  state= {
    error: null,
    loggedIn: null
  };
  // handles login and authentication //
  handleSubmitJwtAuth = ev => {
      ev.preventDefault();
      this.setState({error: null});
      const { user_name, password } = ev.target;
    trackPromise(
      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then(res => {
          TokenService.saveAuthToken(res.authToken)
          if (TokenService.hasAuthToken()){
            return this.onLoginSuccess(user_name)
          }
          user_name.value = ''
          password.value = ''
          
        })
        .catch(res => this.setState({error: res.error}))
    )};
   render(){
    return (
      <div className="loginpage">
       <Burger />
       <Nav />
        <section className="forgot">
          <h3 id="access">log in to access reviews and discussion forum!</h3>
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {this.state.error && <p id="incorrect">{this.state.error}</p>}
        </div>
        <div id="label" className='user_name'>
          <label id="label" htmlFor='LoginForm__user_name'>
            Username
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div id="label" className='password'>
          <label htmlFor='LoginForm__password'>
           Password
          </label>
          <Input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button id="loginsubmit" type='submit'>
          <LoadingIndicator />
          Login
        </Button>
        <h4><Link id="loginSignup" to='/Register'>First time? Register!</Link></h4>
      </form>
      </section>
      <Footer />
      </div>
    );
  };
};

