import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Manubar = () => {
  const data = useSelector(state => state.Admininfo.data)

  return (
    <div className='w-[20vw] h-[90vh] bg-slate-700  flex flex-col items-center gap-5 '>
      <div className=' profile w-[20vw] h-[45vh]  rounded-lg bg-orange-400 flex flex-col items-center p-1'>
        <div className='w-[12vw] h-[25vh] bg-black rounded-[50%] overflow-hidden'>
          <img
            src={data?.avatar?.secure_url}
            // className='w-[25vw] h-[50vh] rounded-[50%] '
          />

          
        </div>
        <div className='text-center'>
            <p className=" text-center"> {data.fullName}</p>
            {data.branch}
            <br />
            <p> subject:-{data.subs}</p>
           

            <br />
            <button className='bg-blue-900 p-2 rounded-md text-white'>create Schedule</button>
          </div>
      </div>
      <div>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
          <Link to='/admin-dashboard/view-Student'>view-Student </Link>
        </button>
        <button className='bg-green-500 rounded-lg ml-2 p-5'>
          <Link to='/admin-dashboard/view-Alldoubts'>view Doubt </Link>{' '}
        </button>
      </div>
    </div>
  )
}

export default Manubar
