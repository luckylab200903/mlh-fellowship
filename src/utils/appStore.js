import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptslice"; // Corrected import
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer, // Corrected reducer name
        config:configReducer
    }
});

export default appStore;



// import {configureStore} from "@reduxjs/toolkit";
// import userReducer from "./userSlice"
// import moviesReducer from "./movieSlice"
// import gptreducer from "./gptslice"
// const appStore=configureStore({

//     reducer:{
//         user:userReducer,
//         movies:moviesReducer,
//         gpt:gptReducer
//     }
// });

// export default appStore;