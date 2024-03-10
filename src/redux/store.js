import { configureStore } from '@reduxjs/toolkit'
import themeSliceReducer from './slices/themeSlice'
import adminauthSlice from './slices/adminAuthSlices'
import studentauthSlice from './slices/studentauthSlices'
import registerSlices from './slices/registerSlices'
import refreshSidebar from './slices/refreshsidebar'
import adminInfoSlices from './slices/adminInfoSlices'
import notesSlice from './slices/NotesSlices'
import classroomSlices from './slices/classroomSlices'
import dashboardSlice from './slices/dashboardSlice'


const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    adminAuth: adminauthSlice,
    stuAuth: studentauthSlice,
    register: registerSlices,
    refreshKey: refreshSidebar,
    Admininfo: adminInfoSlices,
    classroom: classroomSlices,
    notes:notesSlice,
    dashboard:dashboardSlice,
  },
  devTools: true
})
    
export default store
