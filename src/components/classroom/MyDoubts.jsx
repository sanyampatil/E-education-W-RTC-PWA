import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetaAllDoubts } from '../../redux/slices/classroomSlices'

const MyDoubts = () => {
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userId = userData.data._id
  async function LoadData () {
    const data = await dispatch(fetaAllDoubts(userId))
    console.log('hey', data)
  }

  useEffect(() => {
    LoadData()
  }, [])
  return <div>MyDoubts</div>
}

export default MyDoubts
