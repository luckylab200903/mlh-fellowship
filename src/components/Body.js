import React, { useEffect } from 'react';
import Login from "./Login";
import Header from "./Header";
import Browse from './Browse';
import { createBrowserRouter ,RouterProvider, useNavigate} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userSlice';
const Body = () => {
  const dispatch=useDispatch()
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ])



  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        console.log(displayName
          );
    
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
      }
    });
  },[])


  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}



export default Body;


// import React from 'react'
// import Login from "./Login"
// import Header from "./Header"
// const Body = () => {
//   return (
//     <div>
//     <Header />

//       <Login />
//     </div>
//   )
// }

// export default Body;



{/* <div className=" bg-gradient-to-b from-black via-transparent to-black">
        <img
          className="w-full h-auto"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        />
      </div> */}