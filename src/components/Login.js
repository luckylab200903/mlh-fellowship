

import React, { useState } from 'react';
import Header from './Header';
import { useRef } from "react";
import {  updateProfile } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { checkvaliddata } from '../utils/validation';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const [signin, setSignin] = useState(true);
  const [errormessage,seterrormessage]=useState(null)
  const navigate=useNavigate()
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  const handleclick = () => {
    setSignin(!signin);
  }
  const handlevalidation=()=>{

      const message=checkvaliddata(email.current.value,password.current.value);
      seterrormessage(message)

      if(message) return

      if(!signin)
      {

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:"https://media.licdn.com/dms/image/D4D03AQG4vTYyKcK4lQ/profile-displayphoto-shrink_400_400/0/1695023548127?e=1704326400&v=beta&t=3XvvQxhtwSLVyWpKiJ8pPZ-VAOKw4veSVGyPW0O0JsU"
    }).then(() => {
      navigate("/browse")
    }).catch((error) => {
          seterrormessage(error.message)
    });
    
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" " +errorMessage)
    // ..
  });

      }
      else{


        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorMessage +" "+errorCode)
  });
      }
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}  className='p-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70'>
        <h1 className='font-bold p-4 text-3xl'>{signin ? "Sign in" : "Sign Up"}</h1>
        <input type="email" ref={email} placeholder='Email address' className="bg-gray-500 p-4 my-4 w-full rounded-lg" />
        {!signin && <input type="text" placeholder='Full Name' ref={name}className="bg-gray-500 p-4 my-4 w-full rounded-lg" />}
        <input type="password" ref={password} placeholder='Password' className="p-4 my-4 w-full bg-gray-500 rounded-lg" />
        <p className='font-bold text-red-800'>{errormessage}</p>
        <button  onClick={handlevalidation} className='p-4 my-6 bg-red-700 w-full'>{signin ? "Sign in" : "Sign Up"}</button>
        <p className='text-white font-bold cursor-pointer hover:underline' onClick={handleclick}>{signin ?  "New to Netflix sign up now":"Already a member" }</p>
      </form>
    </div>
  );
}

export default Login;

