import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Required } from '../../Utils/Utils';
import './Signup.css';
import AuthApiService from '../../services/auth-api-service';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default class RegistrationForm extends Component {

  state = { error: null, success: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { full_name, nick_name, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nick_name: nick_name.value,
    })
    .then(user => {
    full_name.value = ''
    nick_name.value = ''
    user_name.value = ''
    password.value = ''
    this.setState({ success: true });
})
  .catch(res => {
    this.setState({ error: res.error });
  });
};

  render() {
    const { error } = this.state;
    return (
      <div className="registerpage">
      <Burger />
      <Nav />
        <section className="signupSection">
            <header className="signupHeader">
                <h1>register & join the conversation</h1>
            </header>
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </Input>
        </div>
        <div id="buttonDiv">
        <Button type='submit'>
          Register
        </Button>
        {this.state.success && <h3><Link id="success" to='/Login'>Success! Login now</Link></h3>}
        </div>
      </form>
      </section>
      <Footer />
      </div>
    );
  };
};
