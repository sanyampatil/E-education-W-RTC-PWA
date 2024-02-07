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
import MainContainer from './components/community/Maincontainer.jsx'
import Welcome from './components/community/Welcome.jsx'
import ChatArea from './components/community/ChatArea.jsx'
import Users from './components/community/Users.jsx'
import { Groups } from '@mui/icons-material'
import CreateGroups from './components/community/Creategroups.jsx'
import StudentSignup from './components/signup/StudentSingup.jsx'
import LoginStudent from './components/login/LoginStudent.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/admin/signup' element={<Signup />} />
      <Route path='/student/signup' element={< StudentSignup/>} />
      <Route path='/student/login' element={<LoginStudent/>} />


      <Route path='*' element={<Error />} />
      <Route path='/community' element={<ChatCommunity />}>
        <Route path='/community/welcome' element={<Welcome />} />
        <Route path='/community/chat' element={<ChatArea />} />
        <Route path='/community/users' element={<Users />} />
        <Route path='/community/groups' element ={<Groups />} />
        <Route path='/community/create-groups' element={<CreateGroups />} />

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
