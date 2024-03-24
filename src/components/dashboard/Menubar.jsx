import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../App.css'
import { GrSchedule } from 'react-icons/gr'
import { AiOutlineSchedule } from 'react-icons/ai'

import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from 'react-icons/bs'
const Manubar = ({ openSidebarToggle, OpenSidebar }) => {
  const data = useSelector(state => state.Admininfo.data)

  return (
    <div className='w-[20vw] h-[90vh] bg-slate-700 '>
      {/* <div className=' profile w-[20vw] h-[45vh]  rounded-lg bg-orange-400 flex flex-col items-center p-1 '>
        <div className='w-[12vw] h-[25vh] bg-black rounded-[50%] overflow-hidden'>
          <img
            src={data?.avatar?.secure_url}
            // className='w-[25vw] h-[50vh] rounded-[50%] '
          />
        </div>
        <div className='text-center'>
          <p className=' text-center'> {data.fullName}</p>
          {data.branch}
          <br />
          <p> subject:-{data.subs}</p>

          <br />
          <Link to='/admin-dashboard/create-schedule'>
            <button className='bg-blue-900 p-2 rounded-md text-white'>
              create Schedule
            </button>
          </Link>
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
      <button className='bg-green-500 rounded-lg ml-2 p-5'>
        <Link to='/admin-dashboard/view-schedule'>ViewSchedule </Link>{' '}
      </button> */}
      <aside
        id='sidebar'
        className={openSidebarToggle ? 'sidebar-responsive' : ''}
      >
        <div className='sidebar-title'>
          <span className='icon close_icon' onClick={OpenSidebar}>
            X
          </span>
        </div>

        <ul className='sidebar-list  mt-16'>
          {/* <li className='sidebar-list-item'>
              <a href='' className='flex'>
                <BsGrid1X2Fill className='icon' /> Dashboard
              </a>
            </li> */}

          <Link to='/admin-dashboard/create-schedule'>
            <li className='sidebar-list-item flex  text-gray-400'>
              <GrSchedule className='icon' /> Crate Schedule
            </li>
          </Link>
          <Link to='/admin-dashboard/view-Student'>
            <li className='sidebar-list-item flex  text-gray-400'>
              <BsPeopleFill className='icon' /> students
            </li>
          </Link>
          <Link to='/admin-dashboard/view-schedule'>
            <li className='sidebar-list-item flex  text-gray-400'>
              <AiOutlineSchedule className='icon' /> check Studeule
            </li>
          </Link>
          <Link to='/admin-dashboard/view-Alldoubts'>
            <li className='sidebar-list-item flex  text-gray-400'>
              <BsMenuButtonWideFill className='icon' /> Student doubts
            </li>
          </Link>
          <li className='sidebar-list-item'>
            <a href='' className='flex'>
              <BsFillGearFill className='icon' /> Setting
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Manubar
