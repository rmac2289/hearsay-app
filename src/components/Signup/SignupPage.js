import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Signup from './Signup'



export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  /*handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, nick_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
    .then(user => {
    full_name.value = ''
    nick_name.value = ''
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
})
  .catch(res => {
    this.setState({ error: res.error })
  })
} */

  render() {
    return (
        <>
        <Nav />
        <Signup />
        <Footer />
      </>
    )
  }
}
