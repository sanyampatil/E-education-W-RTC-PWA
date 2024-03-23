import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './components/layout/HomeLayout.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import Error from './components/Error.jsx'
import Signup from './components/signup/Signup.jsx'
import ChatCommunity from './components/community/ChatCommunity.jsx'
import Welcome from './components/community/Welcome.jsx'
import ChatArea from './components/community/ChatArea.jsx'
import Users from './components/community/Users.jsx'
import { Dashboard, Groups, Room, Schedule, Upload } from '@mui/icons-material'
import CreateGroups from './components/community/Creategroups.jsx'
// import StudentSignup from './components/signup/StudentSingup.jsx'
// import LoginStudent from './components/login/LoginStudent.jsx'
import LoginRo from './components/community/LoginRo.jsx'
import Classroom from './components/classroom/Classroom.jsx'
import MainRoom from './components/classroom/MainRoom.jsx'
import PopupmodelAdmin from './components/signup/PopupmodelAdmin.jsx'
import Profile from './components/Profile.jsx'
import Notes from './components/Notes/Notes.jsx'
import MainContainer from './components/community/Maincontainer.jsx'
import CreateNotes from './components/Notes/CreateNotes.jsx'
import UploadNotes from './components/Notes/UploadNotes.jsx'
import CheckNotes from './components/Notes/CheckNotes.jsx'
import ClassroomOption from './components/classroom/ClassroomOption.jsx'
import DoutSlove from './components/classroom/DoutSlove.jsx'
import DoutForm from './components/classroom/DoutForm.jsx'
// import ViewSchedule from './components/classroom/ViewSchedule.jsx'
import MyDoubts from './components/classroom/MyDoubts.jsx'
import DashboardOne from './components/dashboard/DashboardOne.jsx'
import ViewStudent from './components/dashboard/ViewStudent.jsx'
import ViewNotes from './components/Notes/createNotes/ViewNotes.jsx'
import Alldoubts from './components/dashboard/Alldoubts.jsx'
import CreateSchedule from './components/classroom/CreateSchedule.jsx'
import ViewSchdule from './components/dashboard/ViewSchdule.jsx'
import StudentViewSchedule from './components/classroom/StudentViewSchedule.jsx'
import { SocketProvider } from './components/context/Socket.jsx'
import MainClass from './components/classroom/MainClass.jsx'
import { PeerProvider } from './components/context/provider/peer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='*' element={<Error />} />
      <Route path='/community' element={<LoginRo />} />
      <Route path='/classroom' element={<Classroom />} />
      {/* .....................................................>>>>>> */}
      <Route path='/classroom-Option' element={<ClassroomOption />} />
      <Route path='/room/:roomId' element={<MainRoom />} />
      ;<Route path='/DoubtRoom/:roomId' element={<MainClass />} />
      <Route path='/fill-doubt' element={<DoutForm />} />
      {/* <SocketProvider> */}
      <Route path='/class/doubt' element={<DoutSlove />} />
      {/* </SocketProvider> */}
      {/* ////----> student view sche   */}
      <Route path='/view-sche' element={<StudentViewSchedule />} />
      <Route path='/my-doubts' element={<MyDoubts />} />
      {/* ___________________________________________________>>>> dashboard */}
      <Route path='/admin-dashboard' element={<DashboardOne />}>
        <Route path='/admin-dashboard/view-Student' element={<ViewStudent />} />
        <Route path='/admin-dashboard/view-Alldoubts' element={<Alldoubts />} />
        <Route
          path='/admin-dashboard/create-schedule'
          element={<CreateSchedule />}
        />
        <Route
          path='/admin-dashboard/view-schedule'
          element={<ViewSchdule />}
        />
      </Route>
      {/* ___________________________________________________________>>>> authAdmin */}
      <Route path='/admin/signup' element={<Signup />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/admin/profile' element={<Profile />} />
      {/* <Route path='/student/signup' element={< StudentSignup/>} /> */}
      {/* <Route path='/student/login' element={<LoginStudent/>} /> */}
      {/*____ ________________________________________________________>>>>comminuty */}
      <Route path='/community/mychat' element={<ChatCommunity />}>
        <Route path='/community/mychat/welcome' element={<Welcome />} />
        <Route path='/community/mychat/chat/:_id' element={<ChatArea />} />
        <Route path='/community/mychat/users' element={<Users />} />
        <Route path='/community/mychat/groups' element={<Groups />} />
        <Route
          path='/community/mychat/create-groups'
          element={<CreateGroups />}
        />
      </Route>
      {/* __________________________________________________________ /student/notes/view-notes___________>>> Note? */}
      <Route path='/notes' element={<Notes />} />
      <Route path='/notes/create-notes' element={<CreateNotes />} />
      <Route path='/student/notes/view-notes' element={<ViewNotes />} />
      {/* for Admin dashboard */}
      {/* .................... */}
      <Route path='/admin/notes/upload-notes' element={<UploadNotes />} />
      <Route path='/notes/create-checke' element={<CheckNotes />} />
      {/* ............................... */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PeerProvider>
      <SocketProvider>
        <RouterProvider router={router} />
        <Toaster />
      </SocketProvider>
    </PeerProvider>
  </Provider>
)
