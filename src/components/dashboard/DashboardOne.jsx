import React, { useEffect } from 'react'
import { AdminfetaAllDoubts } from '../../redux/slices/classroomSlices'
import { useDispatch } from 'react-redux'

const DashboardOne = () => {
  const dispatch = useDispatch()
  console.log('hiii')
  useEffect(() => {
    const data = dispatch(AdminfetaAllDoubts())
    console.log('data', data)
  }, [])

  return (
    <>
      <div className='w-full h-[90vh] bg-red-500'></div>
    </>
  )
}

export default DashboardOne
