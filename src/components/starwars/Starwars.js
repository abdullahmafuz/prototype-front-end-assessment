import React,{useState} from 'react'

import {Link,Redirect} from 'react-router-dom';

import starWarsLogo from '../../img/Star_Wars_Logo.svg';

import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import Alert from '../layout/Alert';

 const Starwars = () => {
    return (
        <div className="starwars">
            <div className="star-container">

                <img src={starWarsLogo} alt="starwars logo"></img>
                <button>Do. Or do not. There is no try. </button>
                <div></div>
            </div>
            
            
        </div>
    )
}
export default Starwars;