import React from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useSelector } from 'react-redux'
import chat from '../../images/chat.png'
function Groups () {
  const lightTheme = useSelector(state => state.themeKey)

  return (
    <div className='list-container'>
      <div className={'ug-header' + (lightTheme ? '' : ' dark')}>
        <img
          src={chat}
          style={{ height: '2rem', width: '2rem', marginLeft: '10px' }}
        />
        <p className={'ug-title' + (lightTheme ? '' : ' dark')}>
          Available Groups
        </p>
        <IconButton
          className={'icon' + (lightTheme ? '' : ' dark')}
          onClick={() => {
            setRefresh(!refresh)
          }}
        >
          <RefreshIcon />
        </IconButton>
      </div>
      <div className={'sb-search' + (lightTheme ? '' : ' dark')}>
        <IconButton className={'icon' + (lightTheme ? '' : ' dark')}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder='Search'
          className={'search-box' + (lightTheme ? '' : ' dark')}
        />
      </div>
    </div>
  )
}

export default Groups
