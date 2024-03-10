import React, { useEffect } from 'react'
import { AdminfetchAllStudent } from '../../redux/slices/dashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { StudentCard } from './components/studentCard'

const ViewStudent = () => {
  const dispatch = useDispatch()

  const StudentCardItems = useSelector(
    state => state?.dashboard?.AllStudentData
  )

  console.log('StudentCardItems', StudentCardItems)
  async function LoadData () {
    const data = await dispatch(AdminfetchAllStudent())
    console.log('data --> AdminfetaAllStudent', data)
  }

  useEffect(() => {
    LoadData()
  }, [])
  return (
    <div className='w-[80vw] h-[90vh] bg-indigo-950 overflow-auto flex'>
      <div>
        {!StudentCardItems
          ? ''
          : StudentCardItems.map(note => {
              {
                console.log(note)
              }
              return <StudentCard data={note} key={note._id} />
            })}
      </div>
      <div className='w-[60vw] h-[50vh]  text-white bg-cyan-950 pt-5 rounded-lg  fixed right-[30px]  flex '>
        <h1 className='text-[5rem] font-semibold '> total student</h1>
        <div className='text-[7rem]'>{StudentCardItems.length}</div>
      </div>
    </div>
  )
}

export default ViewStudent
