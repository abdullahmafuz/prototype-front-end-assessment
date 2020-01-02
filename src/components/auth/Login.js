import React,{useState} from 'react'

import starWarsLogo from '../../img/Star_Wars_Logo.svg'

const Login = () => {


    const [formData,setFormData]=useState({
        email:'',
        password:''
    })

    const {email,password}=formData;

    const onChange=e =>setFormData({...formData,[e.target.name]:e.target.value});
    
   
   

    return (
        <div className="login-container">
            
            <div className="box">
           
        <form>
                <span className="text-center">login</span>
                <img src={starWarsLogo} alt="Star wars logo "></img>   
            <div className="input-container">
                <input type="email"  name='email' value={email} onChange={e => onChange(e)} required/>
                <label className={email.length > 0 ? 'inputactive':''}>Email Address</label>		
            </div>
            <div className="input-container">		
                <input type="password" name='password' value={password} onChange={e => onChange(e)} required/>
                <label className={password.length > 0 ?'inputactive':''}>Password</label>
            </div>
                <button type="sumbit" className="btn">submit</button>
        </form>	
      
      </div>
        </div>
    )
}

export default Login