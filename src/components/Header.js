import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from '../utils/userSlice';
import { LOGO_URL } from "../constants/file";
import { toggleGPTSearchView } from '../utils/gptslice';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        console.log(displayName);
        navigate("/browse");
    
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
        navigate("/")
      }
    })
    return ()=>unsubscribe()
  },[])


  const handlegptsearch=()=>{
    dispatch(toggleGPTSearchView())
  }

  const handlesignout=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
      <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img alt="logo" className="w-44" src={LOGO_URL} />

      {user && <div className='flex p-2'>
      <button className='bg-red-800 text-white py-2 px-4 mx-4 font-bold rounded-lg m-2' onClick={handlegptsearch}>GPT Search</button>
      <img  alt="Sign in" className="w-24 p-4 justify-end rounded-lg"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
      <button onClick={handlesignout} className="shadow-lg p-4 font-bold mt-[6] rounded-full h-12 text-white bg-red-600 h-auto text-2xl flex items-center justify-center">
  Sign Out
</button>
      </div>}
      </div>
      
  )
}

export default Header