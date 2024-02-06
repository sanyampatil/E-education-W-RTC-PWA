import React from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'

function Groups () {
  return (
    <div className='list-container'>
      <div className='ug-header'>
        <img
        // src={logo}
        // style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
        />
        <p className='ug-title'>Available Groups</p>
        <IconButton className='icon'>
          <RefreshIcon />
        </IconButton>
      </div>
      <div className='sb-search'>
        <IconButton className='icon'>
          <SearchIcon />
        </IconButton>
        <input placeholder='Search' className='search-box' />
      </div>
      <div className='ug-list'></div>
    </div>
  )
}

export default Groups
