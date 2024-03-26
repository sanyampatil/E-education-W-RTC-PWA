import React from 'react'
import NotesCard from './NotesCard'
import { useDispatch, useSelector } from 'react-redux'
import { studentfetchNotes } from '../../../redux/slices/notesSlices'
import { useEffect } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

const ViewNotes = () => {
  const dispatch = useDispatch()
  const lightTheme = useSelector(state => state.themeKey)

  async function LoadNotesData () {
    const data = await dispatch(studentfetchNotes())
    // console.log(' fetch notes data ', data)
  }

  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  useEffect(() => {
    console.log(' aalo useEffect ')
    LoadNotesData()
  }, [])

  const NotesCardItems = useSelector(state => state?.notes?.uploadNotes)

  console.log('NotesCardItems', NotesCardItems)

  const [expanded, setExpanded] = React.useState(false)

  const handleExpansion = () => {
    setExpanded(prevExpanded => !prevExpanded)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <Divider />
      <List>
        {['BCA', 'BBA', 'MBA'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <div
        className={
          'w-full h-full  relative bg-orange-300 flex flex-col space-x-4 items-center justify-center pt-44  ' +
          (lightTheme ? '' : 'dark')
        }
      >
        <div>
          <Button onClick={toggleDrawer(true)} variant='contained'>
            Get Notes
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        {/*       
        <p className='text-[7rem] bg-gray-200 px-10 rounded-xl  font-bold  shadow-xl  '>
          notes
        </p> */}
        <div className=' border-1 border-black flex items-center justify-center  flex-row flex-wrap gap-10     mt-10 '>
          {!NotesCardItems
            ? ''
            : NotesCardItems?.slice(0)
                .reverse()
                .map(note => {
                  return <NotesCard data={note} key={note._id} />
                })}
        </div>
      </div>
    </>
  )
}

export default ViewNotes
