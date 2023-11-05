import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../constants/file';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVedio } from '../utils/movieSlice';
import useMovietrailer  from "../hooks/useMovietrailer";
    const Videoback = ({movie_id}) => 
{
    const trailerVedio=useSelector(store=>store.movies?.trailerVedio)
    useMovietrailer(movie_id)
    return (
        <div className='w-screen overflow-x-scroll '>
          <iframe className="w-screen aspect-video overflow-hidden" src={"https://www.youtube.com/embed/"+trailerVedio?.key+"?&autoplay=1&mute=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
)
}
export default Videoback 
