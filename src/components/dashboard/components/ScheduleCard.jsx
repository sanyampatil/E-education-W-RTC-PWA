import React from 'react'

const ScheduleCard = ({ data, index }) => {
  return (
    <>
      <div className=' h-[70vh]  w-[50vw] rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0'>
        <div className='flex justify-end'>
          <div className='h-4 w-4 rounded-full bg-gray-900'></div>
        </div>
        <div className=' flex items-center justify-center'>
          <header className='text-center text-xl font-extrabold text-gray-600 bg-gray-200  p-3  rounded-lg inline'>
            {data.create_Date}
          </header>
        </div>
        <p className='text-center text-2xl font-extrabold text-gray-500 '>
          {/* Online Test (Physics) */}
          {data.TitleOfClass}
        </p>

        <div>
          <p className='text-center text-5xl font-extrabold text-gray-900'>
            {/* Online Test (Physics) */}
            {data.Topic_heading}
          </p>
          <p className='text-center text-4xl font-extrabold text-[#FE5401]'>
            {data.Time}
          </p>
        </div>
        <p className='text-center text-2xl  text-gray-500  underline '>
          {/* Online Test (Physics) */}
          instructor:-
          {data.Createby}
        </p>
        <footer className='mb-10 flex justify-center relative'>
          <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]'>
            <span>Start</span>
            <i className='fas fa-hand-peace text-xl'></i>
          </button>

          <p className='bg-red-200 inline-block w-8 text-white p-1  pl-3 rounded-[50%]  absolute -right-2  top-14 '>
            {index + 1}
          </p>
        </footer>
      </div>
    </>
  )
}

export default ScheduleCard
