import React, { useEffect } from 'react'
import { AdminfetaAllDoubts } from '../../redux/slices/classroomSlices'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Manubar from './Menubar'

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
      <div className='w-full h-[100vh] bg-red-500 flex pt-20 '>
        <Manubar />
        <Outlet />
      </div>
    </>
  )
}

export default DashboardOne
