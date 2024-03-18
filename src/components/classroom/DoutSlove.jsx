import React from 'react'
import Think from '../../images/Think.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  alignItems: 'center',
  borderRadius: 1,
  
  // display: 'flex',
  // justifyContent: 'center',
  // flexDirection: 'column',
  // spacing: { xs: 1, sm: 2 },

  p: 5
  // ml: 5
}

const DoutSlove = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const lightTheme = useSelector(state => state.themeKey)
  return (
    <div className='w-full h-[90vh] relative '>
      <div className=' w-full h-[90vh] flex  items-center justify-evenly  '>
        {/* left */}
        <div className=' w-[55vw] h-[60vh]  rounded-lg mt-10 border-2 shadow-xl'>
          <div className='text-white w-[53vw] ml-3 mt-2 h-16  '>
            <ul className=' cursor-pointer flex items-center pt-2 justify-end gap-10 text-xl mr-2'>
              <li className='bg-blue-500 p-3 rounded-md '>
                <Link to='/fill-doubt'> send doubt</Link>
              </li>

              <li className='bg-blue-500 p-3 rounded-md '>
                <Link to='/my-doubts'> mydoubts</Link>
              </li>

              <li className='bg-blue-500 p-3 rounded-md '>
                <Link to='/view-sche'>view schedule</Link>
              </li>
            </ul>

            <div className={' text-black' + (lightTheme ? '' : 'text-white')}>
              <p className='text-[4rem] font-semibold'>solve your </p>
              <p className='text-[4rem] font-semibold'>problem with </p>
              <p
                className={
                  ' font-semibold' + (lightTheme ? '' : 'text-gray-900 ')
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                sunt?
              </p>
              ;
              <div>
                <Button onClick={handleOpen} variant='contained'>
                  let's go
                </Button>
                <Modal
                  className='p-20'
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
                >
                  <div className=''>
                    <Box sx={style}>
                      <TextField
                        // helperText='Please enter your Email'
                        id='demo-helper-text-aligned'
                        label='Email'
                        type='mail'
                      />
                      <TextField
                        sx={{ mt: 3 }}
                        // helperText='Please enter your room ID'
                        id='demo-helper-text-aligned'
                        label='Room ID'
                      />
                      <Link to=''>
                        <Button
                          onClick={handleOpen}
                          variant='contained'
                          sx={{ mt: 3 }}
                        >
                          Enter Room
                        </Button>
                      </Link>
                      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        Lorem ipsum do hvdvd vdg gvd dgv strum.
                      </Typography>
                    </Box>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=' '>
          <img src={Think} alt='Logo' className=' w-[33vw]  brightness-50   ' />
        </div>
      </div>
    </div>
  )
}

export default DoutSlove
