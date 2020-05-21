import React from 'react';
import { Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Review from '../Review/Review'
import Departments from '../Departments/Departments'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import PrivateRoute from '../../Utils/privateRoute'
import PublicRoute from '../../Utils/publicRoute'
import DiscussionListPage from '../DiscussionListPage/DiscussionListPage'


function App() {
  
  return (
    <main className='App'>
      <Nav />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/login' component={Login}/>
      <PrivateRoute path='/departments' component={Departments}/>
      <Route exact path='/singlereview' component={Review} />
      <PrivateRoute exact path='/forum' component={DiscussionListPage} />
      <PublicRoute path='/signuppage' component={Signup} />
      <Footer />
    </main>
  );
}

export default App;