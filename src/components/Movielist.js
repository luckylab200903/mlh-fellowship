import React from 'react';
import Moviecard from './Moviecard';

const Movielist = ({ title, movies }) => {
if(!movies) return 
return (
  <div className='px-6  overflow-hidden'>
  <h1 className='font-bold p-4 text-white'>{title}</h1>
    <div className="flex overflow-x-scroll">
      
      <div className='flex'>
      {movies.map(movie => <Moviecard posterpath={movie?.poster_path}/>)}
          
      </div>
    </div>
    
  </div>
)
}
export default Movielist;



// import React from 'react';
// import Moviecard from "./Moviecard";

// const Movielist = ({ title, movies }) => {
//   return (
//     <div>
//       <div>
//         <h1 className='text-red-700'>{title}</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {movies.map(movie => (
//             <Moviecard key={movie.id} posterpath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Movielist;



// import React from 'react'
// import Moviecard from "./Moviecard"

// const Movielist = ({title,movies}) => {
//     // console.log(movies);
//     // console.log(title);
//   return (
//     <div>
//     <div>
//     <h1 className='text-red-700'>{title}</h1>
//     <div className="">
//               {movies.map(movie=><Moviecard key={movie.id} posterpath={movie.poster_path}/>)}
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Movielist
