import React,{useState} from 'react'

import {Redirect} from 'react-router-dom';



import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import {login} from '../../action/auth';


import Loginbody from './Loginbody';

const Login = ({login,isAuth}) => {


    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

   
    const {email,password}=formData;

    const onChange=e =>setFormData({...formData,[e.target.name]:e.target.value});
    


    
 //On submit event handler to checking and send data to backend      
    const onSubmit=(e)=>{
        e.preventDefault();

           login({email,password});

    }


      
 

  // redirect if user is authenticated
  
  if(isAuth){
      return <Redirect to='/starwars' />
  }
   

    return (<Loginbody onSubmit={onSubmit} onChange={onChange} email={email} password={password} />)
}


Login.propTypes = {
    
    login:PropTypes.func.isRequired,
    isAuth:PropTypes.bool
}

const mapStateToProps=state =>({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);