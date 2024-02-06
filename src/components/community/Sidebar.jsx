import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import NightlightIcon from '@mui/icons-material/Nightlight'
import LightModeIcon from '@mui/icons-material/LightMode'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import { IconBase } from 'react-icons'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material'
import ConversationItem from './ConversationItem'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
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
  const navigate = useNavigate()
  const [lightTheme, setlightTheme] = useState(true)

  return (
    <div className='sidebar-container'>
      <div className={'sb-header' + (lightTheme ? '' : ' dark')}>
        <div>
          <IconButton>
            <AccountCircleIcon className={'icon' + (lightTheme ? '' : ' dark')} />
          </IconButton>
        </div>

        <div>
          <IconButton onClick={() => navigate('users')}>
            <PersonAddIcon  className={'icon' + (lightTheme ? '' : ' dark')} />
          </IconButton>{' '}
          <IconButton onClick={() => navigate('groups')}>
            <GroupAddIcon className={'icon' + (lightTheme ? '' : ' dark')} />
          </IconButton>{' '}
          <IconButton onClick={() => navigate('create-groups')}>
            <AddCircleIcon className={'icon' + (lightTheme ? '' : ' dark')} />
          </IconButton>{' '}
          <IconButton
          className={'icon' + (lightTheme ? '' : ' dark')}
            onClick={() => {
              setlightTheme(prevValue => {
                return !prevValue
              })
            }}
          >
            {lightTheme && <LightModeIcon />}

            {!lightTheme && <NightlightIcon />}
          </IconButton>
        </div>
      </div>

      <div className={'sb-search' + (lightTheme ? '' : ' dark')}>
        <SearchIcon />
        <input placeholder='search' className={'search-box' + (lightTheme ? '' : ' dark')} />

      </div>
      <div className={'sb-conversations' + (lightTheme ? '' : ' dark')}>
        {conversation.map(conversation => {
          return (
            <ConversationItem props={conversation} key={conversation.name} />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
