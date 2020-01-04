import React,{useState} from 'react'

import {Link} from 'react-router-dom';

import starWarsLogo from '../../img/Star_Wars_Logo.svg';





import Alert from '../layout/Alert';

const Loginbody = ({onSubmit,onChange,email,password}) => {


    

    const [showPassword,setshowPassword]=useState({
        showpassword:false
    })

    const {showpassword}=showPassword;
  
//On submit event handler to checking and send data to backend    
const showPassword1 =(e)=>{
    setshowPassword({...showPassword,showpassword:!showpassword})
    

}
   

    return (
        <div className="login-container">
            
            <div className="box">
           
        <form  onSubmit={e=>onSubmit(e)}>
                <span className="text-center">login</span>
                <img src={starWarsLogo} className="log-img" alt="Star wars logo "/> 
            <div className="input-container">
                <input type="email"  name='email' value={email} autoComplete="off" onChange={e => onChange(e)} id='l-email' required/>
                <label className={email.length > 0 ? 'inputactive':''} htmlFor="l-email">Email Address</label>		
            </div>
            <div className="input-container">		
                <input type={showpassword ? "text":"password"} name='password' value={password}  minLength="6" onChange={e => onChange(e)} id='l-pass' required/>
                <label className={password.length > 0 ?'inputactive':''} htmlFor='l-pass'>Password</label><span><div onClick={e=>showPassword1(e)} className='eye'></div></span>
            </div>
            <Alert />
                <button type="sumbit" className="btn">submit</button>
        </form>	
        <span> Don’t have an account?  <Link to="/register" className="">Sign Up </Link></span>
      </div>
        </div>
    )
}




export default Loginbody;