import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSchedule } from '../../redux/slices/dashboardSlice'
import ScheduleCard from '../dashboard/components/scheduleCard'

const StudentViewSchedule = () => {
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
    <div className='w-[100vw] h-full relative  flex items-center justify-center pt-28 '>
      <div className='w-[80vw] h-full  bg-slate-950    '>
        <div className=' border-1 border-white  flex items-center justify-center flex-col flex-wrap gap-10 p-20  top-10 '>
          <h1 className=' text-yellow-400 text-[3rem] bg-slate-900 p-5 rounded-lg font-bold'>
            checke Schedule
          </h1>
          {!ScheduleCardItems
            ? ''
            : SchedSuleCardItems?.slice(0)
                .reverse()
                .map((schedule, index) => {
                  {
                    console.log('schedule', schedule)
                  }
                  return (
                    <ScheduleCard
                      data={schedule}
                      key={schedule._id}
                      index={index}
                    />
                  )
                })}
        </div>
      </div>
    </div>
  )
}

export default StudentViewSchedule
