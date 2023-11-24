import React from 'react';
import { useSelector } from 'react-redux';
import Videotitle from './Videotitle';
import Videoback from './Videoback';

const Maincontainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return; 

  const mainmovie = movies[8];
  const {original_title,overview,id}=mainmovie
 return (<div className='pt-[30%] bg-black md:pt-0'>
      <Videotitle  className="" title={original_title} overview={overview}/>
      <Videoback movie_id={id}/>
 </div>)
}

export default Maincontainer;


