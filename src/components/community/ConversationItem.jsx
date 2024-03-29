import React from 'react'
import { useNavigate } from 'react-router-dom'
  const ConversationItem = ({ props }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className='conversation-container'
       onClick={() => navigate('chat')}
       >
        <p className='con-icon'>{props.username[0]}</p>

        <p className='con-title '>{props.username}</p>

        <p className='con-timeStamp'>{props.lastMessage}</p>
        <p className='con-timeStamp'>{props.timeStamp}</p>
      </div>
    </>
  )
}

export default ConversationItem
