import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
const CreateGroups = () => {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter Group name' className='' />
      <IconButton>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  ) 
}

export default CreateGroups
