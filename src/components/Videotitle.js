import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold mt-20 mx-4'>{title}</h1>
        <p className='py-6 text-lg w-1/4 mx-4'>{overview}</p>
        <div className='mx-4'>
      <button className='bg-white text-black p-4 px-12 text-xl hover:bg-gray-400 rounded-lg  font-bold'>▶️Play</button>
       <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-gray-400 mx-2 rounded-lg font-bold'>More Info</button>
       </div>
 

    </div>
  )
}

export default Videotitle
