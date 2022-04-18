import React, {useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './SignIn.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:"",
    })
    
    const [errors,setErrors]=useState({
        email:" ",
        password:" ",
        general:" ",
    })

    
    const [
        signInWithEmailAndPassword, user, loading,hookError,
        ] =useSignInWithEmailAndPassword(auth)

    const handleEmailChange= event=>{
        const emailRegex= /\S+@\S+\.\S+/
        const validEmail=emailRegex.test(event.target.value)
        if(validEmail){
           
            setUserInfo({...userInfo, email: event.target.value})
           
             setErrors({...errors, email:""})
        }

        else{
            setErrors({...errors, email:'Invalid Email'})
             setUserInfo({...userInfo,email:""})
        }
    }

    const handlePasswordChange= event=>{
        const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const validPassword=passwordRegex.test(event.target.value)

        if(validPassword){
           
            setUserInfo({...userInfo, password: event.target.value})
            console.log(userInfo)
             setErrors({...errors, password:""})
        }

        else{
            setErrors({...errors, password: "minimum 6 charecter"})
             setUserInfo({...userInfo,password:""})
        }
    }

    const handleLogin=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email,userInfo.password)
        console.log(userInfo.email, userInfo.password)
    }
    return (
        <div className='login-container'>
             <div className='login-title'>signIn</div>
           <form className='login-form' onSubmit={handleLogin}>
               <input type="text" placeholder='your Email' onBlur={handleEmailChange} required/>
               {errors?.email && <p className='error-message'>{errors.email}</p>}
               <input type="password" placeholder='your Password' onBlur={handlePasswordChange} required/>
               {errors?.password && <p className='error-message'>{errors.password}</p>}
               <button>SignIn</button>
            {/* {error && <p className='error-message'>{error}</p>} */}
            {/* {<p className='error-message'>{hookError?.message}</p>} */}
            <ToastContainer  />
            <p>dont have an account? <Link to="/signup">  <span >Sign Up first</span> </Link> </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;