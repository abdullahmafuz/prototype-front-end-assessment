import React,{Fragment} from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

import './App.scss';


import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register'

//Redux

import {Provider} from 'react-redux';

import store from './store'


const App=()=> {
  return (
    <Provider store={store}>
    <Fragment>
      <Router>
        <Route exact path='/' component={Login} />
          <Switch>
            <Route exact path='/register' component={Register} />
          </Switch>
      </Router>
    </Fragment>
    </Provider>
  );
}

export default App;
