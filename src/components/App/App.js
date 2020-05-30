import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Review from '../Review/Review'
import Departments from '../Departments/Departments'
import Signup from '../Signup/Signup'
import PublicRoute from '../../Utils/publicRoute'
import PrivateRoute from '../../Utils/privateRoute'
import DiscussionListPage from '../DiscussionListPage/DiscussionListPage'
import NotFound from '../NotFound/NotFound'


function App() {
  
  return (
    <main className='App'>
      <Switch>
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/Login' component={Login}/>
      <PrivateRoute path='/Reviews' component={Departments}/>
      <Route exact path='/singlereview' component={Review} />
      <PrivateRoute path='/Forum' component={DiscussionListPage} />
      <PublicRoute path='/Register' component={Signup} />
      <Route component={NotFound}/>
      </Switch>
      
    </main>
  );
}

export default App;