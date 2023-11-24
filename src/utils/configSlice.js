import { configureStore, createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en"
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    }
  }
});

export const { changeLanguage } = configSlice.actions; // Fix this line
export default configSlice.reducer;
