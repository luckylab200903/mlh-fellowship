import React from 'react';
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const Secondarcontainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black md:pt-0 pt-[30%]">
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Popular"} movies={movies.popularMovies} />
        <Movielist title={"Top Rated"} movies={movies.topRated} />
        <Movielist title={"Upcoming"} movies={movies.upcoming} />
        <Movielist title={"Suspense"} movies={movies.populare} />
      </div>

      <p className="text-white text-center md:text-left">Hello second</p>
    </div>
  );
};

export default Secondarcontainer;


// import React from 'react'
// import Movielist from './Movielist'
// import { useSelector } from 'react-redux'

// const Secondarcontainer = () => {
//   const movies=useSelector(store=>store.movies)
//   return (
    
//     <div className=" bg-black">
//     <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 '>
//     <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
//     <Movielist title={"Popular"} movies={movies.popularMovies}/>
//     <Movielist title={"TOp rated"} movies={movies.topRated}/>
//     <Movielist title={"Upcoming"} movies={movies.upcoming}/>
//     <Movielist title={"Suspense"} movies={movies.populare}/>
//     </div>
    

//     <p>Hello second</p>

//     </div>
//   )
// }

// export default Secondarcontainer