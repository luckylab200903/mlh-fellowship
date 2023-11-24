import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_URL } from '../constants/file'

const Gptsearch = () => {
  return (
    <>
        <div className='fixed -z-10'>
  <img className='h-screen w-screen object-center object-cover' src={BACKGROUND_URL} alt="Background" />
</div>

      <div className=''>
     
   <GptSearchBar/>
   <GptMovieSuggestion/>
    </div>
    </>
    
  )
}

export default Gptsearch
