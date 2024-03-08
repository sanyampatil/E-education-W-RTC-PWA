import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
// import notesImg from '../../images/notesImg.png'

const uploadNotes = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [infoData, setInfoData] = useState({
    subName: '',
    class_name: '',
    topicName: '',
    createBy:''

  })



  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }


  console.log('infoData', infoData)

  async function submitDoutForm (event) {
   
    event.preventDefault()
   
    const formData = new FormData()
    formData.append('subName', infoData.subName)
    formData.append('class_name', infoData.class_name)
    formData.append('topicName', infoData.topicName)
    formData.append('createBy', infoData.createBy)


    // dispatch create account action

   

    setInfoData({
      subName: '',
      class_name: '',
      topicName: '',
      createBy:''
    })
  }

  return (
  <div className='w-full h-screen bg-red-200'>
    <div className='w-[full] h-[90vh] flex items-center justify-center'>
      <div className='w-[80vw] h-[70vh]  mt-10 bg-slate-800 rounded-lg flex  '>
        {/* from -> */}

        <div className=' form '>
          <form
            noValidate
            onSubmit={submitDoutForm}
            className='flex ml-20 justify-center  rounded-lg p-10 text-white  h-[70vh] w-[40vw]  m-5 
              bg-slate-700 '
          >
            <div className='border-2  p-5  w-[40vw] h-[60vh] flex flex-col text-stone-50  gap-5'>
              <h1 className='text-[1.7rem]'>upload notes for </h1>

              <div className='  flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='subName'
                  id='subName'
                  placeholder='Enter your subName..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.subName}
                />{' '}
              </div>
              <div className=' flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='class_name'
                  id='class_name'
                  placeholder='Enter your class_name..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.class_name}
                />
              </div>

              <div className=' flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='topicName'
                  id='topicName'
                  placeholder='Enter your topicName..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.topicName}
                />
              </div>
              <div className=' flex flex-col gap-1'>
                <input
                  type='text'
                  required
                  name='createBy'
                  id='createBy'
                  placeholder='Enter your createBy..'
                  className='bg-transparent px-2 py-1 border'
                  onChange={handleUserInput}
                  value={infoData.createBy}
                />
              </div>
              <button
                type='submit'
                className=' bg-blue-900  rounded-lg text-white  p-3  font-semibold text-lg cursor-pointer'
              >
              Upload Notes
              </button>
            </div>
          </form>
        </div>

        {/* img */}

        <div className=' w-[100%] h-[50vh] '>
          <img
            // src={notesImg}
            alt='Logo'
            className='  w-[100vw] h-[70vh] brightness-50   '
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default uploadNotes
