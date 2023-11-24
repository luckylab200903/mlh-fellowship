import React from 'react'
import { signOut } from "firebase/auth";
import { supported_lang } from '../constants/file';
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from '../utils/userSlice';
import { LOGO_URL } from "../constants/file";
import { toggleGPTSearchView } from '../utils/gptslice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch()
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch)
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
  const handlechange=(e)=>{
  //console.log(e.target.value);
  dispatch(changeLanguage(e.target.value))

  }
  return (
      <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  sm:bg-blue-800 md:bg-green-700">
      <img alt="logo" className="w-44 mx-auto md:mx-0" src={LOGO_URL} />

      {user && <div className='flex  justify-between sm:mx-auto md:mx-0 mx-auto'>
      {showGPTSearch && <select className='p-2 bg-gray-800 text-white h-16 m-2 mt-4 rounded-lg' onChange={handlechange}>
      {supported_lang.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
      <button className='bg-red-800 text-white py-2 px-4 mx-4 font-bold rounded-lg m-2' onClick={handlegptsearch}>{!showGPTSearch?"GPT Search":"HomePage"}</button>
      <img  alt="Sign in" className="w-24 p-4 hidden md:block justify-end rounded-lg"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
      <button onClick={handlesignout} className="p-4 font-bold mt-[6] rounded-full h-[7] text-white bg-red-600 h-auto text-2xl flex items-center justify-center">
  Sign Out
</button>
      </div>}
      </div>
      
  )
}

export default Header