import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptslice"; // Corrected import

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer, // Corrected reducer name
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