import React from 'react'

const MessageSelf = () => {
  var props2 = { name: 'you', message: 'This is a simple message' }

  return (
    <div className='self-message-container'>
      <div className='messageBox'>
        <p>{props2.message}</p>
        <p className='self-timeStamp'>12:00</p>
      </div>
    </div>
  )
}

export default MessageSelf
