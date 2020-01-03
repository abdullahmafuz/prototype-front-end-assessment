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
            console.log(`password don't match`);
        }else{
            console.log(formData)
        }
    }


  // toggle function for password field
    const showPassword1 =(e)=>{
        setshowPassword({...showPassword,showpassword:!showpassword})
       

    }
    const showPassword2 =(e)=>{
        setshowPassword({...showPassword,showpassword2:!showpassword2})
     

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
                <input type={showpassword ? "text":"password"} name='password' value={password}  minLength="6" onChange={e => onChange(e)} required/>
                <label className={password.length > 0 ?'inputactive':''}>Password</label><span><div onClick={e=>showPassword1(e)} className='eye'></div></span>
            </div>

            <div className="input-container">		
                <input type={showpassword2 ? "text":"password"} name='password2' value={password2} onChange={e => onChange(e)} required/>
                <label className={password2.length > 0 ?'inputactive':''}>Confirm Password</label><span><div onClick={e=>showPassword2(e)} className='eye'></div></span>
            </div>
            
                <button type="sumbit" className="btn">Submit</button>
                <Link to='/' className="btn back">Back</Link>
        </form>	
      
      </div>
        </div>
    )
}

export default Register;