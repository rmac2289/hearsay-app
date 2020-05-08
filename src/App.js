import React from 'react';
import { Route } from 'react-router-dom'
import Landing from './Landing'
import Login from './Login'
import WriteReview from './WriteReview'
import Review from './Review'
import Chat from './Chat'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/review' component={WriteReview} />
      <Route exact path='/singlereview' component={Review} />
      <Route exact path='/chat' component={Chat} />
      
    </main>
  );
}

export default App;