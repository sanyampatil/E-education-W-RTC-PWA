import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDoubt } from '../../redux/slices/classroomSlices'
import DoubtCard from './DoubtCard'

const MyDoubts = () => {
  const dispatch = useDispatch()

  const DoubtCardItems = useSelector(state => state?.classroom?.Doubt)
  console.log("DoubtCardItems",DoubtCardItems)


  // const AdminIsLogin = localStorage.getItem('adminIslogin')
  // console.log('AdminLogin:::-', AdminIsLogin)
  const stuIsLogin = localStorage.getItem('stuIsLogin')
  console.log('stuIsLogin', stuIsLogin)

  console.log('under the student')
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userId = userData.data._id
  console.log(userId)
  async function LoadDataStudent () {
    console.log("jnbujbuj")
    
    const data = await dispatch(fetchAllDoubt(userId))
    console.log('hey', data)
  } 

    useEffect(() => {
      LoadDataStudent()
    }, [])

  return (
    <div className='w-full h-full bg-slate-900'>
      <div className='w-[100vw] h-[100vh]'>
        <div className='flex items-center  justify-center  relative'>
          <h1 className='text-[5rem]'>My Doubts</h1>
          <div className='w-[80vw] h-[80vh]  bg-indigo-950 flex overflow-auto p-10 absolute  top-28  rounded-lg'>
            <div className='flex flex-wrap  items-center gap-5'>
              {!DoubtCardItems
                ? ''
                : DoubtCardItems.map((Doubt, index) => {
                    {
                      console.log(Doubt)
                    }
                    return (
                      <DoubtCard data={Doubt} key={Doubt._id} index={index} />
                    )
                  })}
            </div>
          </div>

          {/* {NotesCardItems?.map(note => {
            {
              console.log(note)
            }
            return <NotesCard data={note} key={note._id} />
          })} */}
        </div>
      </div>
    </div>
  )
}

export default MyDoubts
