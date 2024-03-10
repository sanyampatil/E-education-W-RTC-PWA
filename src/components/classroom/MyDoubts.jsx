import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  AdminfetaAllDoubts,
  fetaAllDoubts
} from '../../redux/slices/classroomSlices'
import { AdminfetchAllStudent } from '../../redux/slices/dashboardSlice'

const MyDoubts = () => {
  const dispatch = useDispatch()
  const AdminIsLogin = localStorage.getItem('adminIslogin')
  console.log('AdminLogin:::-', AdminIsLogin)
  const stuIsLogin = localStorage.getItem('stuIsLogin')
  console.log('stuIsLogin', stuIsLogin)

  if (stuIsLogin) {
    console.log('under the student')
    const userData = JSON.parse(localStorage.getItem('userData'))
    const userId = userData.data._id
    async function LoadDataAdmin () {
      const data = await dispatch(fetaAllDoubts(userId))
      console.log('hey', data)
    }

    useEffect(() => {
      LoadDataAdmin()
    }, [])
  } else {
    console.log('under the Admin')
    async function LoadDataStudent () {
      const data = await dispatch(AdminfetaAllDoubts())
      console.log('AdminfetaAllDoubts;;;;?>>', data)
    }

    useEffect(() => {
      LoadDataStudent()
    }, [])
  }

  return (
    <div className='w-full h-full bg-slate-900'>
      <div className='w-[100vw] h-[100vh]'>
        <div>
          {NotesCardItems?.map(note => {
            {
              console.log(note)
            }
            return <NotesCard data={note} key={note._id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MyDoubts
