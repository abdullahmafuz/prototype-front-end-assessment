import React,{useState} from 'react'

import {Link,Redirect} from 'react-router-dom';

import starWarsLogo from '../../img/Star_Wars_Logo.svg';

import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import Alert from '../layout/Alert';

import Task1 from '../tasks/Task1'

 const Starwars = () => {

    const [onfetch,setOnfetch]=useState(false);

 

    return (
        <div className="starwars">
            <div className="star-container">

                <img src={starWarsLogo} alt="starwars logo"></img>
                <button onClick={e=>setOnfetch(!onfetch)}><span className="star"></span>Do. Or do not. There is no try. <span className="star"></span></button>
            
            </div>
            <Task1 fetch={onfetch}/>
            <Task1 fetch={onfetch}/>
            <Task1 fetch={onfetch}/>
            <Task1 fetch={onfetch}/>
            
            
        </div>
    )
}
export default Starwars;