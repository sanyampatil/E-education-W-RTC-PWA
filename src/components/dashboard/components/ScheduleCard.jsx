import React from 'react'

const ScheduleCard = ({ data }) => {
  return (
    <main className=''>
      <div className='absolute left-1/2 top-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400'></div>

      <div className='absolute left-1/2 top-1/2 h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0'>
        <div className='flex justify-end'>
          {/* <div className='h-4 w-4 rounded-full bg-gray-900'></div> */}
        </div>

        <header className='text-center text-xl font-extrabold text-gray-600'>
          2021.09.01
        </header>

        <div>
          <p className='text-center text-5xl font-extrabold text-gray-900'>
            {/* Online Test (Physics) */}
            {data.Topic_heading}
          </p>
          <p className='text-center text-4xl font-extrabold text-[#FE5401]'>
            2 hours
          </p>
        </div>

        <footer className='mb-10 flex justify-center'>
          <button className='flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]'>
            <span>Start</span>
            <i className='fas fa-hand-peace text-xl'></i>
          </button>
        </footer>
      </div>
    </main>
  )
}

export default ScheduleCard
