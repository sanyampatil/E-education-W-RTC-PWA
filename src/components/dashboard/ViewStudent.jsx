import React, { useEffect } from 'react'
import { AdminfetchAllStudent } from '../../redux/slices/dsashboardSlice'
import { useDispatch } from 'react-redux'

const ViewStudent = () => {
  const dispatch = useDispatch()

  async function LoadData () {
    const data = await dispatch(AdminfetchAllStudent())
    console.log('data --> AdminfetaAllStudent', data)
  }

  useEffect(() => {
    LoadData()
  }, [])
  return <div className='w-[50vw] h-[50vh] bg-white'></div>
}

export default ViewStudent
