import React, { createContext, useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DownMenuBar from '../../DownMenuBar'
export const myContext = createContext()
function MainContainer () {
  const dispatch = useDispatch()
  const lightTheme = useSelector(state => state.themeKey)
  const [refresh, setRefresh] = useState(true)

  return (
    <div className='top-main-container'>
      <div className={'main-container' + (lightTheme ? '' : ' dark')}>
        <myContext.Provider
          value={{ refresh: refresh, setRefresh: setRefresh }}
        >
          <Sidebar />
          <Outlet />
          <div className=' mt-[20%]'>
            <DownMenuBar />
          </div>
        </myContext.Provider>
        {/* <Welcome /> */}
        {/* <CreateGroups /> */}
        {/* <ChatArea props={conversations[0]} /> */}
        {/* <Users /> */}
        {/* <Groups /> */}
      </div>
    </div>
  )
}

export default MainContainer
