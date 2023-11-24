import React from 'react';

const Videotitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-36 px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:p-0 pt-[30%] md:text-5xl font-bold mt-20 text-center md:text-left'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4 mx-4'>{overview}</p>
      <div className='mx-auto justify-center my-4 text-center md:text-left'>
        <button className='bg-white text-black py-2 px-6 md:py-4 px-12 text-sm hover:bg-gray-400 rounded-lg font-bold'>
          ▶️ Play
        </button>
        <button className='bg-gray-500 hidden md:inline-block text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-gray-400 mx-2 rounded-lg font-bold'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;



// import React from 'react'

// const Videotitle = ({title,overview}) => {
//   return (
//     <div className='w-screen aspect-video pt-36 px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
//         <h1 className='text-2xl md:text-3xl font-bold mt-20  mx-auto'>{title}</h1>
//         <p className='hidden md:inline-block py-6 text-lg w-1/4 mx-4'>{overview}</p>
//         <div className='mx-auto justify-center my-4 '>
//       <button className='bg-white  text-black py-2 px-6  md:py-4 px-12 text-xl hover:bg-gray-400 rounded-lg  font-bold'>▶️Play</button>
//        <button className='bg-gray-500 hidden md:inline-block text-white p-4 px-12 text-xl bg-opacity-50 hover:bg-gray-400 mx-2 rounded-lg font-bold'>More Info</button>
//        </div>
 

//     </div>
//   )
// }

// export default Videotitle
