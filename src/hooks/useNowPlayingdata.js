import { useDispatch, useSelector } from 'react-redux';
import { addnowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constants/file';

const useNowPlayingdata = () => {
    const dispatch = useDispatch();
    const nowPlayingmovies=useSelector(store=>store.movies.nowPlayingmovies)

    const getNOW_playing = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addnowPlayingMovies(json.results));
    }
   

    useEffect(() => {
        if(!nowPlayingmovies) getNOW_playing();
    }, []);
}

export { useNowPlayingdata }; 
