import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import webinarbro from '../../images/webinarbro.png'
import webinar from '../../images/webinar.png'
import TeaClass from '../../images/TeaClass.png'


// import chatmsg2 from '../../images/chatmsg2.png'
const Classroom = () => {
  const lightTheme = useSelector(state => state.themeKey)

  return (
    <div>
      <div className=' h-[90vh] flex items-center  justify-evenly  p-10 '>
        <div className=' w-[50vw] h-[70vh]  mt-10 '>
        {/* <img src={webinar} alt='Logo' className=' w-[70%]' /> */}
        <img src={TeaClass} alt='Logo' className=' w-[70%]' />

        {/* <img src={webinarbro} alt='Logo' className=' w-[70%]' /> */}
        

        </div>
        <div className='w-[40vw] h-[60vh] '>
          <div className='ml-5'>
            <h1
              className={
                'text-[5rem] font-semibold ' + (lightTheme ? '' : 'text-white')
              }
            >
              let's start with EduCollab{' '}
            </h1>
            <p className={'' + (lightTheme ? '' : ' text-gray-500')}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium doloremque architecto, doloribus adistinctio fugiat
              similique ipsa commodi reprehenderit est facere necessitatibus!
            </p>

            <Link to='/classroom-Option'>
              {' '}
              <button className='text-[3.rem]  bg-blue-700 p-4 mt-7 text-white rounded-xl '>
                get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classroom
