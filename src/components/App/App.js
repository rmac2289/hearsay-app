import React from 'react';
import { Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import WriteReview from '../WriteReview/WriteReview'
import Review from '../Review/Review'
import Forum from '../Forum/Forum'
import Departments from '../Departments/Departments'
import SignupPage from '../Signup/SignupPage'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/review' component={WriteReview} />
      <Route exact path='/singlereview' component={Review} />
      <Route exact path='/forum' component={Forum} />
      <Route exact path='/departments' component={Departments} />
      <Route exact path='/signuppage' component={SignupPage} />
      
    </main>
  );
}

export default App;