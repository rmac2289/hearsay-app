import React, { useState } from 'react'
import { Button, Input } from '../../Utils/Utils'
import { Link } from 'react-router-dom'
import './Login.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import useRouter from '../../Utils/CustomHooks'

export default function LoginForm(props) {
  const router = useRouter()
  const onLoginSuccess = () => {
      alert('success!')
      return router.push('/');

    }
  const [error, setError] = useState(null)
  const [isLoggedIn,setIsLoggedin]=useState(false)

  const handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      setError(null)
      const { user_name, password } = ev.target
    
      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then(res => {
          user_name.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          onLoginSuccess()
        })
        .catch(res => {
          setError(true)
        })
    } 
    return (
        <section className="forgot">
          <h4 id="access">log in to access reviews and discussion forum!</h4>
      <form
        className='LoginForm'
        onSubmit={handleSubmitJwtAuth}
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

