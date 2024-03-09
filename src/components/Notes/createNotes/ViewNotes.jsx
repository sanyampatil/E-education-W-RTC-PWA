import React from 'react'
import NotesCard from './NotesCard'
import { useDispatch, useSelector } from 'react-redux'
import { studentfetchNotes } from '../../../redux/slices/notesSlices'
import { useEffect } from 'react'

const ViewNotes = () => {
  const dispatch = useDispatch()

  async function LoadNotesData () {
    const data = await dispatch(studentfetchNotes())
    console.log(' fetch notes data ', data)
  }

  useEffect(() => {
    console.log(' aalo useEffect ')
    LoadNotesData()
  }, [])

  const NotesCardItems = useSelector(state => state?.notes?.uploadNotes)

  console.log('NotesCardItems', NotesCardItems)
  return (  
   <>

    <div className='w-[full] h-full   bg-orange-300 flex flex-row space-x-4 items-center justify-center ' >
      <div className= ' border-1 border-black flex flex-row flex-wrap gap-5 p-20 mt-20 '>
        {NotesCardItems?.map(note => {
          {
            console.log(note)
          }
          return <NotesCard data={note} key={note._id} />
        })}
      </div>
    </div>
   </>
  )
}

export default ViewNotes
