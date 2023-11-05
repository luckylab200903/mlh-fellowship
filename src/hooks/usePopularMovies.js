import { useDispatch } from 'react-redux';
import { addPopularMovies, addnowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constants/file';
import { addTrailerVedio } from "../utils/movieSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getNOW_playing = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getNOW_playing();
    }, []);
}

export { usePopularMovies }; 
