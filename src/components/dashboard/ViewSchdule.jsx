import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSchedule } from '../../redux/slices/dashboardSlice'
import ScheduleCard from './components/scheduleCard'

const ViewSchdule = () => {
  const dispatch = useDispatch()

  const ScheduleCardItems = useSelector(state => state?.dashboard?.ScheduleData)

  console.log('fetchallSchdule', ScheduleCardItems)
  async function LoadData () {
    const data = await dispatch(fetchAllSchedule())
    console.log('data --> fetchallSchdule', data)
  }

  useEffect(() => {
    LoadData()
  }, [])
  return (  
    <div className='w-full h-full relative  bg-black flex flex-row space-x-4 items-center overflow-auto justify-center '>
      <div className=' border-1 border-white  flex items-center justify-center   flex-wrap gap-10 p-20  absolute top-10 overflow-auto'>
        {ScheduleCardItems?.slice(0)
                .reverse().map((schedule, index) => {
          {
            console.log('schedule', schedule)
          }
          return (
            <ScheduleCard data={schedule} key={schedule._id} index={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ViewSchdule
