import React, { useContext, useEffect, useRef, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import MessageSelf from './MessageSelf'
import MessageOthers from './MessageOthers'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton'
import axios from 'axios'
import { myContext } from './MainContainer'
import { Socket } from 'socket.io-client'
import io from 'socket.io-client'
var socket, chat

function ChatArea () {
  const lightTheme = useSelector(state => state.themeKey)
  const [messageContent, setMessageContent] = useState('')
  const messagesEndRef = useRef(null)
  const dyParams = useParams()
  const [chat_id, chat_user] = dyParams._id.split('&')
  // console.log(chat_id, chat_user);
  const userData = JSON.parse(localStorage.getItem('userData'))
  const [allMessages, setAllMessages] = useState([])
  const [AllMessageCopy, setAllMessageCopy] = useState([])
  // console.log("Chat area id : ", chat_id._id);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext)
  const [loaded, setloaded] = useState(false)
  const [socketConnectionStatus, setsocketConnectionStatus] = useState(false)

  const ENDPOINT = 'http://localhost:7861'

  const sendMessage = () => {
    console.log('chat Area ')
    // console.log("SendMessage Fired to", chat_id._id);

    var data = null

    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`
      }
    }
    axios
      .post(
        'http://localhost:7861/api/v1/message/',
        {
          content: messageContent,
          chatId: chat_id
        },
        config
      )
      .then(({ response }) => {
        data = response
        console.log('data djbbhb ', data) 
        console.log('Message Fired')
      })
    socket.emit('newMessage', data)
  }

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // connetect to socket
  useEffect(() => {
    console.log('fdvhvbdfbmdbd')
    // console.log()
    socket = io(ENDPOINT)
    socket.emit(' ', userData)
    socket.on('connection', () => {
      setsocketConnectionStatus(!socketConnectionStatus)
    })
  }, [])

  // new message recieved
  useEffect(() => {
    socket.on('message recieved', newMessage => {
      if (!AllMessageCopy || AllMessageCopy.id !== newMessage._id) {
      } else {
        setAllMessages([...allMessages], newMessage)
      }
    })
  })

  useEffect(() => {
    console.log('Users refreshed')
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`
      }
    }
    axios
      .get('http://localhost:7861/api/v1/message/' + chat_id, config)
      .then(({ data }) => {
        setAllMessages(data)
        setloaded(true)

        socket.emit('join chat', chat_id)
        console.log('Data from Acess Chat API ', data)
      })
    setAllMessageCopy(allMessages)
    // scrollToBottom();
  }, [refresh, chat_id, userData.data.token])

  if (!loaded) {
    return (
      <div
        style={{
          border: '20px',
          padding: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Skeleton
          variant='rectangular'
          sx={{ width: '100%', borderRadius: '10px' }}
          height={60}
        />
        <Skeleton
          variant='rectangular'
          sx={{
            width: '100%',
            borderRadius: '10px',
            flexGrow: '1'
          }}
        />
        <Skeleton
          variant='rectangular'
          sx={{ width: '100%', borderRadius: '10px' }}
          height={60}
        />
      </div>
    )
  } else {
    return (
      <div className={'chatArea-container' + (lightTheme ? '' : ' dark')}>
        <div className={'chatArea-header' + (lightTheme ? '' : ' dark')}>
          <p className={'con-icon' + (lightTheme ? '' : ' dark')}>
            {chat_user[0]}
          </p>
          <div className={'header-text' + (lightTheme ? '' : ' dark')}>
            <p className={'con-title' + (lightTheme ? '' : ' dark')}>
              {chat_user}
            </p>
          </div>
          <IconButton className={'icon' + (lightTheme ? '' : ' dark')}>
            <DeleteIcon />
          </IconButton>
        </div>
        <div className={'messages-container' + (lightTheme ? '' : ' dark')}>
          {allMessages
            .slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message.sender
              const self_id = userData.data._id
              if (sender._id === self_id) {
                // console.log("I sent it ");
                return <MessageSelf props={message} key={index} />
              } else {
                // console.log("Someone Sent it");
                return <MessageOthers props={message} key={index} />
              }
            })}
        </div>
        <div ref={messagesEndRef} className='BOTTOM' />
        <div className={'text-input-area' + (lightTheme ? '' : ' dark')}>
          <input
            placeholder='Type a Message'
            className={'search-box' + (lightTheme ? '' : ' dark')}
            value={messageContent}
            onChange={e => {
              setMessageContent(e.target.value)
            }}
            onKeyDown={event => {
              if (event.code == 'Enter') {
                // console.log(event);
                sendMessage()
                setMessageContent('')
                setRefresh(!refresh)
              }
            }}
          />
          <IconButton
            className={'icon' + (lightTheme ? '' : ' dark')}
            onClick={() => {
              sendMessage()
              setRefresh(!refresh)
            }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default ChatArea
