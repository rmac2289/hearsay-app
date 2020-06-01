import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Review from '../Review/Review';
import Departments from '../Departments/Departments';
import Signup from '../Signup/Signup';
import PublicRoute from '../../Utils/publicRoute';
import DiscussionListPage from '../DiscussionListPage/DiscussionListPage';
import NotFound from '../NotFound/NotFound';
import TokenService from '../../services/token-service';


function App() {
  
  return (
    <main className='App'>
      <Switch>
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/Login' component={Login}/>
      <Route exact path='/Reviews' render={() => !TokenService.hasAuthToken() ? <Redirect to="/Login"/>: <Departments />}/>
      <Route exact path='/singlereview' component={Review} />
      <Route path='/Forum' render={() => !TokenService.hasAuthToken() ? <Redirect to="/Login"/>: <DiscussionListPage />}/>
      <PublicRoute path='/Register' component={Signup} />
      <Route component={NotFound}/>
      </Switch>
      
    </main>
  );
};

export default App;