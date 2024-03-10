  import React from 'react'
  import NotesCard from './NotesCard'
  import { useDispatch, useSelector } from 'react-redux'
  import { studentfetchNotes } from '../../../redux/slices/notesSlices'
  import { useEffect } from 'react'

  const ViewNotes = () => {
    const dispatch = useDispatch()

    async function LoadNotesData () {
      const data = await dispatch(studentfetchNotes())
      // console.log(' fetch notes data ', data)
    }

    useEffect(() => {
      console.log(' aalo useEffect ')
      LoadNotesData()
    }, [])

    const NotesCardItems = useSelector(state => state?.notes?.uploadNotes)

    console.log('NotesCardItems', NotesCardItems)
    return (
      <>
        <div className='w-[full] h-full  relative bg-orange-300 flex flex-col space-x-4 items-center justify-center  pt-20'>
          
          <p className='text-[7rem] bg-gray-200 px-10 rounded-xl  font-bold  shadow-xl'>notes</p>

          <div className=' border-1 border-black flex items-center justify-center  flex-row flex-wrap gap-10     mt-10 '>
            {NotesCardItems?.slice(0)
              .reverse()
              .map(note => {
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
