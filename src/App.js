import React,{Fragment} from 'react';

import './App.scss';
import starwarsLogo from './img/Star_Wars_Logo.svg';

const App=()=> {
  return (
    <Fragment>
      <h1>react app ready</h1>
      <img src={starwarsLogo}></img>
    </Fragment>
  );
}

export default App;
