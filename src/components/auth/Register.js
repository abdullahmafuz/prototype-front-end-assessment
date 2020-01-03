import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import starWarsLogo from '../../img/Star_Wars_Logo.svg'


const Register = () => {
   
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2}=formData;

    const onChange=e =>setFormData({...formData,[e.target.name]:e.target.value});
    
   
    const onSubmit=(e)=>{
        e.preventDefault();

        if(password !== password2){
            console.log(`password don't match`);
        }else{
            console.log(formData)
        }
    }

   

    return (
        <div className="login-container">
            
            <div className="box">
           
        <form  onSubmit={e=>onSubmit(e)}>
                <span className="text-center">Register</span>
                <img src={starWarsLogo} className="reg-img" alt="Star wars logo "></img>   
                <div className="input-container">
                <input type="text"  name="name" value={name} autoComplete="none"  onChange={e => onChange(e)} required/>
                <label className={name.length > 0 ? 'inputactive':''}>Full Name</label>		
            </div>
            <div className="input-container">
                <input type="email"  name='email' value={email} autoComplete="off" onChange={e => onChange(e)} required/>
                <label className={email.length > 0 ? 'inputactive':''}>Email Address</label>		
            </div>
            <div className="input-container">		
                <input type="password" name='password' value={password}  minLength="6" onChange={e => onChange(e)} required/>
                <label className={password.length > 0 ?'inputactive':''}>Password</label>
            </div>

            <div className="input-container">		
                <input type="password" name='password2' value={password2} onChange={e => onChange(e)} required/>
                <label className={password2.length > 0 ?'inputactive':''}>Confirm Password</label>
            </div>
            
                <button type="sumbit" className="btn">Submit</button>
                <Link to='/' className="btn back">Back</Link>
        </form>	
      
      </div>
        </div>
    )
}

export default Register;