import React, { Component } from 'react'
import { Button, Input } from '../../Utils/Utils'
import { Link } from 'react-router-dom'
import './Login.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  
  state = { error: null }

  handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ error: null })
      const { user_name, password } = ev.target
    
      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then(res => {
          user_name.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          this.props.onLoginSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    } 

  render() {
    const { error } = this.state
    return (
        <section className="forgot">
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
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
    )
  }
}
