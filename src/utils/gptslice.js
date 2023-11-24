import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieResults:null,
        movieNames:null
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addgptmoviesresult:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
});

export const { toggleGPTSearchView ,addgptmoviesresult} = gptSlice.actions;
export default gptSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const gptSlice=createSlice({
//     name:"gpt",
//     initialState:{
//             showGPTSearch:false
//     },
//     reducers:{
//         togglegptseachview:(state,action)=>{
//             state.showGPTSearch=!state.showGPTSearch
//         },
//     }

// })

// export const {togglegptseachview}=gptSlice.actions;
// export default gptSlice.reducer