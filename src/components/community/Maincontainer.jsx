import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import ConversationItem from './ConversationItem'
import Welcome from './Welcome'
import CreateGroups from './Creategroups'
  
function MainContainer () {

  const [conversation, setconversation] = useState([
    {
      name: 'Test#1',
      lastMessage: 'hii love',
      timeStamp: 'today'
    },

    {
      name: 'Test#2',
      lastMessage: 'hii love',
      timeStamp: 'today'
    },

    {
      name: 'Test#2',
      lastMessage: 'hii love',
      timeStamp: 'today'
    }
  ])  

  return (
    <>
      <div className=' mt-[9vh] main-container'>
      <Sidebar/>
      {/* <Welcome/> */}
      <CreateGroups/>
      {/* <ChatArea props={conversation[0]}/> */}
      </div>
    </>
  )
}

export default MainContainer
