import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  Route,
  RouterProvider,
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
      <Route path='/community' element={<ChatCommunity />} />




    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router} />
    <Toaster/>
  </Provider>
  
)
