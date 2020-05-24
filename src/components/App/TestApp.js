import React from 'react';
import config from '../../config'
import useSWR from 'swr'

function TestApp() {
  
  return (
    <main className='App'>
      <div>{data[0].id}</div>
     </main>
  );
}

export default TestApp;