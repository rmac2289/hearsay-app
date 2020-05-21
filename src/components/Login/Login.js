import React, { Component } from 'react'
import { Button, Input } from '../../Utils/Utils'
import { Link } from 'react-router-dom'
import './Login.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


export default class LoginForm extends Component {

  onLoginSuccess = (user_name) => {
      sessionStorage.setItem('username', user_name.value);
      this.props.history.push('/', {forceRefresh: true});
      this.props.render();
    }
  state= {
    error: null,
    loggedIn: null
  }
  
  handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({error: null})
      const { user_name, password } = ev.target
    
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
        .catch(res => {
          this.setState({error: true})
        })
    } 
   render(){
    return (
      <>
      <Nav />
        <section className="forgot">
          <h4 id="access">log in to access reviews and discussion forum!</h4>
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>
          {this.state.error && <p>{this.state.error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            Username
          </label>
          <Input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
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
        <Button type='submit'>
          Login
        </Button>
        <h4><Link id="loginSignup" to='/signuppage'>First time? Register here</Link></h4>
      </form>
      </section>
      <Footer />
      </>
    )
  }
}

