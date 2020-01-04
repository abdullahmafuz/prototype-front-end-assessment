import React,{useState} from 'react'

import {Link,Redirect} from 'react-router-dom';

import starWarsLogo from '../../img/Star_Wars_Logo.svg';

import {connect} from 'react-redux';



import Task1 from '../tasks/Task1';
import Task2 from '../tasks/Task2';
import Task3 from '../tasks/Task3';
import Task4 from '../tasks/Task4';

 const Starwars = ({isAuth}) => {

    const [onfetch,setOnfetch]=useState(false);

 
    if(!isAuth){
      return  <Redirect to ='/' />
    }

    return (
        <div className="starwars">
            <div className="star-container">

                <img src={starWarsLogo} alt="starwars logo"></img>
                <button onClick={e=>setOnfetch(!onfetch)}><span className="star"></span>Do. Or do not. There is no try. <span className="star"></span></button>
            
            </div>
            <Task1 fetch={onfetch}/>
            <Task2 fetch={onfetch}/>
            <Task3 fetch={onfetch}/>
            <Task4 fetch={onfetch}/>
            
            
        </div>
    )
}

const mapStateToProps=state =>({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{})(Starwars);