import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies, addnowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constants/file';
import { addTrailerVedio } from "../utils/movieSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getpopularmovies=useSelector(store=>store.movies.addPopularMovies)
    const getNOW_playing = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {

        !getpopularmovies && getNOW_playing();
    }, []);
}

export { usePopularMovies }; 
