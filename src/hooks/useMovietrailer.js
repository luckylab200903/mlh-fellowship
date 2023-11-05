import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../constants/file"
import { addTrailerVedio } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovietrailer=(movie_id)=>{
    const dispatch=useDispatch()
    const getmovieVedio=async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS)
        const json=await data.json()
        const filterdata=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterdata.length ===0 ? json.results[0]: filterdata[0];        
        dispatch(addTrailerVedio(trailer))
}
    useEffect(()=>{
        getmovieVedio()
    },[])
}
export default useMovietrailer;