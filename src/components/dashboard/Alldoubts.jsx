import React, { useEffect } from 'react'
import { AdminfetaAllDoubts } from '../../redux/slices/classroomSlices'
import { useDispatch, useSelector } from 'react-redux'
import DoubtCard from '../classroom/DoubtCard'
import { AnimatePresence } from 'framer-motion'

const Alldoubts = () => {
  console.log('under the student')
  const dispatch = useDispatch()

  
  const DoubtCardItems = useSelector(state => state?.classroom?.AdminAllDout)
  console.log('DoubtCardItems', DoubtCardItems)


  async function LoadDataAdmin () {
    const data = await dispatch(AdminfetaAllDoubts())
    console.log('hey', data)
  }
  useEffect(() => {
    LoadDataAdmin()
  }, [])

  // const date = new Date()
  // console.log(date.getMonth() + 1)

  return (
    <div className='w-[80vw] h-[90vh] bg-indigo-950 flex overflow-auto p-10'>
      <div className='flex flex-wrap  items-center justify-center gap-5'>
        {!DoubtCardItems
          ? ''
          : DoubtCardItems.slice(0)
              .reverse()
              .map((Doubt, index) => {
                {
                  console.log(Doubt)
                }
                return <DoubtCard data={Doubt} key={Doubt._id} index={index} />
              })}
      </div>
    </div>
  )
}

export default Alldoubts
