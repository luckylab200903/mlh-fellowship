import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
      <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img alt="logo" className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

      {user && <div className='flex '>
      <img  alt="Sign in" className="w-24 p-4 justify-end rounded-lg"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
      <button onClick={handlesignout} className="p-4 font-bold mt-4 rounded-full h-16 text-white bg-red-600 h-auto text-2xl">Sign Out</button>
      </div>}
      </div>
      
  )
}

export default Header