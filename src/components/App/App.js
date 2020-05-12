import React from 'react';
import { Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import WriteReview from '../WriteReview/WriteReview'
import Review from '../Review/Review'
import Departments from '../Departments/Departments'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

function App() {
  return (
    <main className='App'>
      <Nav />
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/review' component={WriteReview} />
      <Route exact path='/singlereview' component={Review} />
      {/*<Route exact path='/forum' component={Forum} /> */}
      <Route exact path='/departments' component={Departments} />
      <Route exact path='/signuppage' component={Signup} />
      <Footer />
    </main>
  );
}

export default App;