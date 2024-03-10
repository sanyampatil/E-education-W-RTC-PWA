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
    <div className='w-full h-full  bg-black flex flex-row space-x-4 items-center justify-center '>
      <div className=' border-1 border-white  flex flex-row flex-wrap gap-5 p-20 mt-20 '>
        {ScheduleCardItems?.map(schedule => {
          {
            console.log(schedule)
          }
          return <ScheduleCard data={schedule} key={schedule._id} />
        })}
      </div>
    </div>
  )
}

export default ViewSchdule
