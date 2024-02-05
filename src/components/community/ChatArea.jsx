import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'
const ChatArea = ({ props }) => {
  return (
    <div className='chatArea-container'>
      <div className='chatArea-header'>
        <p className='con-icon'>D</p>
        <div className='header-text'>
          <p className='con-title'>XAL JKA HDG</p>
          <p className='con-timeStamp'>10:00</p>
        </div>

        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className='messages-container'>
        <MessageOthers />
        <MessageSelf />

        <MessageOthers />
        <MessageSelf />

        <MessageOthers />
        <MessageSelf />
      </div>
      <div className='text-input-area'>
        <input placeholder='type a message' className='search-box' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea
