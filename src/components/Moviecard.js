import React from 'react'
import { IMAGE_LOGO } from '../constants/file'
const Moviecard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="card logo" src={IMAGE_LOGO+posterpath}/>
    </div>
  )
}

export default Moviecard
