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
const Sidebar = () => {

 const [conversation, setconversation] = useState([
  {
   name:"Test#1",
   lastMessage:"hii love",
   timeStamp:"today"
  },


  {
   name:"Test#1",
   lastMessage:"hii love",
   timeStamp:"today"
  },


  {
   name:"Test#1",
   lastMessage:"hii love",
   timeStamp:"today"
  },



 ]
  )
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>{' '}
          <IconButton>
            <GroupAddIcon />
          </IconButton>{' '}
          <IconButton>
            <AddCircleIcon />
          </IconButton>{' '}
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>

      <div className='sb-search'>
      <SearchIcon/>
      <input placeholder='search' className='search-box' />

      </div>
      <div className='sb-conversations'>
      {conversation.map((conversation)=>{ 
     return <ConversationItem props={conversation} key={conversation.name}/>

      })}

      </div>
    </div>
  )
}

export default Sidebar
