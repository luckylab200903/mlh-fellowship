import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, addTopRated, addUpcoming, addnowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constants/file';
import { addTrailerVedio } from "../utils/movieSlice";
const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcoming=useSelector(store=>store.movies.upcoming)
    const getNOW_playing = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcoming(json.results));
    }

    useEffect(() => {
        !upcoming && getNOW_playing();
    }, []);
}

export { useUpcoming }; 
