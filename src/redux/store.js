import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./slices/themeSlice";
import adminauthSlice from './slices/adminAuthSlices';
import studentauthSlice from "./slices/studentauthSlices";
import registerSlices from "./slices/registerSlices";
import refreshSidebar from "./slices/refreshsidebar";


const store = configureStore({
    reducer: {
        themeKey: themeSliceReducer,    
        auth: adminauthSlice,
        stuAuth:studentauthSlice,
        register:registerSlices,
        refreshKey: refreshSidebar


    },
    devTools: true
});

export default store;