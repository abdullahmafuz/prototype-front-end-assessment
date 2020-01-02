import React,{Fragment} from 'react';

import './App.scss';


import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register'


const App=()=> {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;
