import React from 'react'
import Think from '../../images/Think.png'
import { Link } from 'react-router-dom'

const DoutSlove = () => {
  return (
    <div className='w-full h-[90vh] relative '>
      <div className=' w-full h-[90vh] flex  items-center justify-evenly  '>
        {/* left */}
        <div className=' w-[55vw] h-[60vh]  mt-10 border-2'>
          <div className='bg-white w-[53vw] ml-3 mt-2 h-16  '>
            <ul className=' cursor-pointer flex items-center pt-2 justify-end gap-10 text-xl mr-2'>
              <li className='bg-blue-500 p-2 rounded-md '>
             <Link to="/fill-doubt"> send doubt</Link>
              </li>

              <li className='bg-blue-500 p-2 rounded-md '>
             <Link to="/my-doubts"> mydoubts</Link>
              </li>

              <li className='bg-blue-500 p-2 rounded-md '>
              <Link to="/view-sche">view schedule</Link>
              </li>
            </ul>

            <div>
             <p className='text-[4rem] font-semibold'>solve your     </p>
             <p className='text-[4rem] font-semibold'>problem with   </p>
             <p className=' font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt?</p>

             <button className='bg-blue-500 p-2 rounded-md mt-5 text-stone-50 font-semibold' >let's go</button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=' '>
          <img src={Think} alt='Logo' className=' w-[33vw]  brightness-50   ' />
        </div>
      </div>
    </div>
  )
}

export default DoutSlove
