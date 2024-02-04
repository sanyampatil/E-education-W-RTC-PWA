import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
function MainContainer () {
  return (
    <>
      <div className=' mt-[9vh] main-container'>
      <Sidebar/>
      <ChatArea/>
      </div>
    </>
  )
}

export default MainContainer
