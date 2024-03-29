import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  return (
    <div className='w-[100%] h-[9vh] bg-slate-500'>
      <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
        <section className=' text-lg '>
          copyright {year} | All rights reserved
        </section>
        <section className='flex items-center justify-center gap-5 text-2xl text-white'>
          <a
            href=''
            className=' hover:text-blue-500 transition-all ease-in-out duration-300'
          >
            <BsFacebook />
          </a>
          <a
            href=''
            className=' hover:text-blue-500 transition-all ease-in-out duration-300'
          >
            <BsInstagram />
          </a>
          <a
            href=''
            className=' hover:text-blue-500 transition-all ease-in-out duration-300'
          >
            <BsLinkedin />
          </a>
          <a
            href=''
            className=' hover:text-blue-500 transition-all ease-in-out duration-300'
          >
            <BsTwitter />
          </a>
        </section>
      </footer>
    </div>
  )
}

export default Footer
