import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarcontainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    
    <div className=" bg-black">
    <div className='-mt-40 pl-12 relative z-20 '>
    <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <Movielist title={"Popular"} movies={movies.popularMovies}/>
    <Movielist title={"TOp rated"} movies={movies.topRated}/>
    <Movielist title={"Upcoming"} movies={movies.upcoming}/>
    <Movielist title={"Suspense"} movies={movies.populare}/>
    </div>
    

    <p>Hello second</p>

    </div>
  )
}

export default Secondarcontainer