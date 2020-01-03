import React,{useState} from 'react'
import {Link,Redirect} from 'react-router-dom';
import starWarsLogo from '../../img/Star_Wars_Logo.svg';

import {connect} from 'react-redux';

import {setAlert} from '../../action/alert';
import {register} from '../../action/auth';




import PropTypes from 'prop-types';

import Alert from '../layout/Alert';


const Register = ({setAlert ,register,isAuth}) => {
   
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const [showPassword,setshowPassword]=useState({
        showpassword:false,
        showpassword2:false
    })

    const {name,email,password,password2}=formData;
    
    const {showpassword,showpassword2}=showPassword;
    


    const onChange=e =>setFormData({...formData,[e.target.name]:e.target.value});
    
 //On submit event handler to checking and send data to backend  
    const onSubmit=(e)=>{
        e.preventDefault();

        if(password !== password2){
            setAlert(`password don't match`,'danger');
        }else{
            register({name,email,password});
        }
    }


  // toggle function for password field
    const showPassword1 =(e)=>{
        setshowPassword({...showPassword,showpassword:!showpassword})
       

    }
    const showPassword2 =(e)=>{
        setshowPassword({...showPassword,showpassword2:!showpassword2})
     

    }


    
  // redirect if user is authenticated
  
  if(isAuth){
    return <Redirect to='/starwars' />
}
 
   

    return (
        <div className="login-container">
            
            <div className="box">
           
        <form  onSubmit={e=>onSubmit(e)}>
                <span className="text-center">Register</span>
                <img src={starWarsLogo} className="reg-img" alt="Star wars logo "></img>   
                <div className="input-container">
                <input type="text"  name="name" value={name} autoComplete="none"  onChange={e => onChange(e)} id='r-name' required/>
                <label className={name.length > 0 ? 'inputactive':''} htmlFor='r-name'>Full Name</label>		
            </div>
            <div className="input-container">
                <input type="email"  name='email' value={email} autoComplete="off" onChange={e => onChange(e)} id='r-email' required/>
                <label className={email.length > 0 ? 'inputactive':''} htmlFor='r-email'>Email Address</label>		
            </div>
            <div className="input-container">		
                <input type={showpassword ? "text":"password"} name='password' value={password}  minLength="6" id='r-pass' onChange={e => onChange(e)} required/>
                <label className={password.length > 0 ?'inputactive':''} htmlFor='r-pass'>Password</label><span><div onClick={e=>showPassword1(e)} className='eye'></div></span>
            </div>

            <div className="input-container">		
                <input type={showpassword2 ? "text":"password"} name='password2' id='r-pass2' value={password2} onChange={e => onChange(e)} required/>
                <label className={password2.length > 0 ?'inputactive':''} htmlFor='r-pass2'>Confirm Password</label><span><div onClick={e=>showPassword2(e)} className='eye'></div></span>
            </div>
            <Alert />
                <button type="sumbit" className="btn">Submit</button>
                <Link to='/' className="btn back">Back</Link>
        </form>	
      
      </div>
        </div>
    )
}

Register.propTypes={
    setAlert:PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
    isAuth:PropTypes.bool
}

const mapStateToProps=state =>({
    isAuth:state.auth.isAuth
})


export default  connect(mapStateToProps,{setAlert,register})(Register);