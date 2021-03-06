import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

import './App.scss';


import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import Starwars from '../src/components/starwars/Starwars';

//Redux

import {Provider} from 'react-redux';

import store from './store';

import {loadUser} from '../src/action/auth';
import {setAuthToken} from '../src/utils/setAuthToken';
import PageNotFound from '../src/components/pages/PageNotFound';


if(localStorage.token){
  setAuthToken(localStorage.token);
}



const App=()=> {


  useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  return (
    <Provider store={store}>
    <Fragment>
      <Router>
        
          <Switch>
          <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/starwars' component={Starwars} />
            <Route component={PageNotFound} />
          </Switch>
      </Router>
    </Fragment>
    </Provider>
  );
}

export default App;
