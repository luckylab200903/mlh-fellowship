import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, addTopRated, addnowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constants/file';
import { addTrailerVedio } from "../utils/movieSlice";
const useTopRated = () => {
    const dispatch = useDispatch();
    const top_rated=useSelector(store=>store.movies.top_rated)
    const getNOW_playing = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }

    useEffect(() => {
        !top_rated && getNOW_playing();
    }, []);
}

export { useTopRated }; 
