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
import MainContainer from './components/community/MainContainer.jsx'
import Welcome from './components/community/Welcome.jsx'
import ChatArea from './components/community/ChatArea.jsx'
import Users from './components/community/Users.jsx'
import { Groups, Room } from '@mui/icons-material'
import CreateGroups from './components/community/Creategroups.jsx'
// import StudentSignup from './components/signup/StudentSingup.jsx'
// import LoginStudent from './components/login/LoginStudent.jsx'
import LoginRo from './components/community/LoginRo.jsx'
import Classroom from './components/classroom/Classroom.jsx'
import MainRoom from './components/classroom/MainRoom.jsx'
import PopupmodelAdmin from './components/signup/PopupmodelAdmin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/admin/signup' element={<Signup />} />
      <Route path='/notes' element={<PopupmodelAdmin />} />
      <Route path='/classroom' element={<Classroom />} />

      <Route path='/room/:roomId' element={<MainRoom />} />
      {/* <Route path='/student/signup' element={< StudentSignup/>} /> */}
      {/* <Route path='/student/login' element={<LoginStudent/>} /> */}
      <Route path='*' element={<Error />} />
      <Route path='/community' element={<LoginRo/>}/  >
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
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>
)
