import React,{useState} from 'react'

import {Link} from 'react-router-dom';

import starWarsLogo from '../../img/Star_Wars_Logo.svg'

const Login = () => {


    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

    const {email,password}=formData;

    const onChange=e =>setFormData({...formData,[e.target.name]:e.target.value});
    
    const onSubmit=(e)=>{
        e.preventDefault();

        
            console.log(formData)
        
    }
   

    return (
        <div className="login-container">
            
            <div className="box">
           
        <form  onSubmit={e=>onSubmit(e)}>
                <span className="text-center">login</span>
                <img src={starWarsLogo} className="log-img" alt="Star wars logo "></img>   
            <div className="input-container">
                <input type="email"  name='email' value={email} autoComplete="off" onChange={e => onChange(e)}  required/>
                <label className={email.length > 0 ? 'inputactive':''}>Email Address</label>		
            </div>
            <div className="input-container">		
                <input type="password" name='password' value={password} onChange={e => onChange(e)} required/>
                <label className={password.length > 0 ?'inputactive':''}>Password</label>
           
            </div>
                <button type="sumbit" className="btn">submit</button>
        </form>	
        <span> Don’t have an account?  <Link to="/register" className="">Sign Up </Link></span>
      </div>
        </div>
    )
}

export default Login