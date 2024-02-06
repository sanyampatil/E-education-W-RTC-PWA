// import React, { useContext, useEffect, useState } from 'react'
import React from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
// import logo from '../Images/live-chat_512px.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { AnimatePresence, motion } from 'framer-motion'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// // import { refreshSidebarFun } from "../Features/refreshSidebar";

function Users () {
  // const [refresh, setRefresh] = useState(true);
  // const { refresh, setRefresh } = useContext(myContext);

  // const lightTheme = useSelector(state => state.themeKey)
  // const [users, setUsers] = useState([])
  // const userData = JSON.parse(localStorage.getItem('userData'))
  // // console.log("Data from LocalStorage : ", userData);
  // const nav = useNavigate()
  // const dispatch = useDispatch()

  // if (!userData) {
  //   console.log('User not Authenticated')
  //   nav(-1)
  // }

  // useEffect(() => {
  //   console.log('Users refreshed')
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${userData.data.token}`
  //     }
  //   }
  //   axios.get('http://localhost:8080/user/fetchUsers', config).then(data => {
  //     console.log('UData refreshed in Users panel ')
  //     setUsers(data.data)
  //     // setRefresh(!refresh);
  //   })
  // }, [refresh])

  return (
    <div className='list-container'>
      <div className='ug-header'>
        <img
        // src={logo}
        // style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
        />
        <p className='ug-title'>Available Users</p>
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
      <div className='ug-list'> </div>
    </div>
  )
}

export default Users
