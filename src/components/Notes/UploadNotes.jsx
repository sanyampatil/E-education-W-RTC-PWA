import React, { useEffect, useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AdminNotesUpload, fetchNotes } from '../../redux/slices/notesSlices'
import { CleaningServices } from '@mui/icons-material'
import NotesCard from './createNotes/NotesCard'
import notesImg from '../../images/notesImg.png'

const uploadNotes = () => {
  const AdminId = useSelector(state => state?.adminAuth?.data._id)

  const dispatch = useDispatch()
  const dispatchGet = useDispatch()
  const navigate = useNavigate()
  const [File, setFile] = useState(null)
  const [notes, setnotes] = useState()

  const NotesCardItems = useSelector(state => state?.notes?.uploadNotes)

  // setnotes(NotesCardItems)

  console.log('NotesCardItems', NotesCardItems)

  async function LoadNotesData () {
    const data = await dispatchGet(fetchNotes(AdminId))
    console.log(' fetch notes data ', data)
  }

  // console.log('NotesData', NotesData)
  // setnotes(NotesData)

  useEffect(() => {
    console.log(' aalo useEffect ')
    LoadNotesData()
  }, [])

  // console.log('HIIII')
  //  setnotes(NotesCardItems)

  const [infoData, setInfoData] = useState({
    subName: '',
    class_Name: '',
    topicName: '',
    createBy: ''
  })

  function handleUserInput (e) {
    const { name, value } = e.target
    setInfoData({
      ...infoData,
      [name]: value
    })
  }

  // console.log('infoData', infoData)

  const handleFileChange = e => {
    const file = e.target.files[0]
    // Optionally, you can validate the file type here
    if (file && file.type === 'application/pdf') {
      setFile(file)
    } else {
      setFile(null)
      alert('Please select a PDF file.')
    }
  }

  async function submitNotesUploadForm (event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('subName', infoData.subName)
    formData.append('class_Name', infoData.class_Name)
    formData.append('topicName', infoData.topicName)
    formData.append('createBy', infoData.createBy)
    formData.append('noteFile', File)
    formData.append('id', AdminId)

    const response = await dispatch(AdminNotesUpload(formData))
    console.log(' note upload res>>', response)
    // if (response?.payload?.success) navigate('/admin/profile')

    if (response?.payload?.success) {
      // navigate('/my-doubts')
    }

    console.log('filFile', File)

    // dispatch create account action

    setInfoData({
      subName: '',
      class_Name: '',
      topicName: '',
      createBy: ''
    })
  }
  function handleClick () {
    console.log('hiiii')
  }

  return (
    <div className='w-full h-full '>
      <div className=' h-[90vh] flex items-center justify-center'>
        <div className='w-[80vw] h-[70vh]  mt-10 bg-slate-800 rounded-lg flex  '>
          {/* from -> */}

          <div className=' form '>
            <form
              noValidate
              onSubmit={submitNotesUploadForm}
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
                  {/* <input
                    type='text'
                    required
                    name='class_Name'
                    id='class_Name'
                    placeholder='Enter your class_Name..'
                    className='bg-transparent px-2 py-1 border'
                    onChange={handleUserInput}
                    value={infoData.class_Name}
                  /> */}
                  <select
                    onChange={handleUserInput}
                    value={infoData.class_Name}
                    className='bg-transparent px-2 py-1 border'
                    name='class_Name'
                  >
                    <option className='text-black  inline w-full' value=''>
                      select your class
                    </option>

                    <option className='text-black  inline w-full' value='BCA-I'>
                      BCA-I
                    </option>
                    <option
                      className='text-black  inline w-full'
                      value='BCA-II'
                    >
                      BCA-II
                    </option>
                    <option
                      className='text-black  inline w-full'
                      value='BCA-II'
                    >
                      BCA-III 3
                    </option>
                  </select> 
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
                <div className=' flex flex-col gap-1'>
                  <input
                    type='File'
                    required
                    name='noteFile'
                    id='File'
                    placeholder='Enter your File..'
                    className='bg-transparent px-2 py-1 border'
                    onChange={handleFileChange}
                    // value={infoDa  ta.createBy}
                    accept=' application/pdf'
                  />
                </div>
                <button
                  onClick={handleClick}
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
              src={notesImg}
              alt='Logo'
              className='  w-[100vw] h-[70vh] brightness-50   '
            />
          </div>
        </div>
      </div>

      <div className='w-full h-[90vh] bg-amber-500'>
        <div className='m-10 flex gap-5 flex-wrap items-center pt-5'>
          {console.log(notes)}
          {!NotesCardItems
            ? ''
            : NotesCardItems.slice(0)
                .reverse()
                .map(note => {
                  {
                    console.log(note)
                  }
                  return <NotesCard data={note} key={note._id} />
                })}
        </div>
      </div>
    </div>
  )
}

export default uploadNotes
