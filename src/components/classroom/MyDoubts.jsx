import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetaAllDoubts } from '../../redux/slices/classroomSlices'

const MyDoubts = () => {
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userId = userData.data._id
  useEffect(() => {
    const data =  dispatch(fetaAllDoubts(userId))
    console.log("hey",data)
  }, [])
  return <div>MyDoubts</div>
}

export default MyDoubts
