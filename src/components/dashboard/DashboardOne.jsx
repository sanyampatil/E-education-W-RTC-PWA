import React, { useEffect } from 'react'
import { AdminfetaAllDoubts } from '../../redux/slices/classroomSlices'
import { useDispatch } from 'react-redux'

const DashboardOne = () => {
  const dispatch = useDispatch()

  console.log('hiii')

  async function LoadData () {
    const data = await dispatch(AdminfetaAllDoubts())
    console.log('data --> AdminfetaAllDoubts', data)
  }

  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <div className='w-full h-[90vh] bg-red-500'></div>
    </>
  )
}

export default DashboardOne
