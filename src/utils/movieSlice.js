import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null,
        popularMovies:null,
        topRated:null,
        upcoming:null,
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming=action.payload
        },
        addTrailerVedio:(state,action)=>{
            state.trailerVedio=action.payload
        }
    }

})

export const {addnowPlayingMovies,addTrailerVedio,addPopularMovies ,addTopRated,addUpcoming,addPopulare}=movieSlice.actions
export default movieSlice.reducer;
