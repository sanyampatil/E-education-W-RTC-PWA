import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AdminfetaAllDoubts, fetaAllDoubts } from '../../redux/slices/classroomSlices'
import { AdminfetchAllStudent } from '../../redux/slices/dsashboardSlice'

const MyDoubts = () => {
  const dispatch = useDispatch()
  // const userData = JSON.parse(localStorage.getItem('userData'))
  // const userId = userData.data._id
  // async function LoadDataAdmin () {
  //   const data = await dispatch(fetaAllDoubts(userId))
  //   console.log('hey', data)
  // }

  


  async function LoadDataStudent () {
    const data = await dispatch(AdminfetaAllDoubts())
    console.log('AdminfetaAllDoubts;;;;?>>', data)
  }



  useEffect(() => {
    LoadDataStudent()
  }, [])
  return <div className='w-[40vw] h-[70vh] bg-slate-900'>MyDoubts</div>
}

export default MyDoubts
