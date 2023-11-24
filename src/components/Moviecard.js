import React from 'react'
import { IMAGE_LOGO } from '../constants/file'
const Moviecard = ({posterpath}) => {
  if(!posterpath) return null
  return (
    
    <div className='md:w-48 w-36 pr-4'>
      <img alt="card logo" src={IMAGE_LOGO+posterpath}/>
    </div>
  )
}

export default Moviecard
