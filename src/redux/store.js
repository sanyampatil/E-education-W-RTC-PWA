import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./slices/themeSlice";
import authSlice from './slices/authSlices';


const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer,    
        auth: authSlice,

    },
    devTools: true
});

export default store;