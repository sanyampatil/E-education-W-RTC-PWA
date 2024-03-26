import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const DoubtCard = ({ data, index }) => {
  console.log('data', data)
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: '0.3'
        }}
        className='relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'
      >
        <div className='p-5'>
          <div className='w-20 h-20 bg-red-500 absolute right-2 -top-2 shadow-2xl flex items-center justify-center'>
            <p className='text-lg  text-white  font-semibold flex flex-col'>
              {data.class_name}
            </p>

            <p></p>
          </div>
          <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'></h5>
          <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
            <p className='bg-red-200 inline-block w-8 text-white p-1  pl-3 rounded-[50%]'>
              {index + 1}
            </p>
            <br />
            {data.doubt}
          </p>
          <h1>submit by:- {data.studentName}</h1>
        </div>
        <div class='p-6 pt-0'>
          {/* <button
       class='select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-non    e disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
       type='button'
       data-ripple-light='true'
     >
       Read More
     </button> */}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default DoubtCard
