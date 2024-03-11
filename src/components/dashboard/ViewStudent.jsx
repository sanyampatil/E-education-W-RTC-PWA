import React, { useEffect } from 'react'
import { AdminfetchAllStudent } from '../../redux/slices/dashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { StudentCard } from './components/studentCard'
const ViewStudent = () => {
  const dispatch = useDispatch()

  async function LoadData () {
    const data = await dispatch(AdminfetchAllStudent())
    console.log('data --> AdminfetaAllStudent', data)
  }

  useEffect(() => {
    LoadData()
  }, [])
  const StudentCardItems = useSelector(
    state => state?.dashboard?.AllStudentData
  )
  console.log('StudentCardItems', StudentCardItems)

  return (
    <div className='  bg-indigo-950 overflow-auto flex  flex-row '>
      <div className='w-full h-[90vh]'>
        {!StudentCardItems
          ? ''
          : StudentCardItems.map(note => {
              {
                console.log(note)
              }
              return <StudentCard data={note} key={note._id} />
            })}
      </div>
      <div className='w-[45vw] h-[70vh]  m-2 text-white bg-gray-900 pt-5 rounded-lg  right-5   fixed flex flex-col  items-center justify-center '>
        <div className='text-[7rem] bg-slate-600  py-10 px-14 rounded-full inline '>
          {StudentCardItems.length}
        </div>
        <h1 className='text-[3rem] font-semibold '> Total Student</h1>
      </div>
    </div>
  )
}

export default ViewStudent
