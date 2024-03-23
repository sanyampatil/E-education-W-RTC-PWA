import React, { useCallback, useEffect } from 'react'
import { useSocket } from '../context/Socket'
import { usePeer } from '../context/provider/peer'

const MainClass = () => {
  const { socket } = useSocket()
  const { peer, createOffer } = usePeer
  const handleNewUserJoined = useCallback(
    async data => {
      const offer = await createOffer()
      socket.emit('call-user', { emailId, offer })

      const { emailId } = data
      console.log('user join room', emailId)
    },
    [createOffer, socket]
  )

  const handleIncommingCall = useCallback(data => {
    const { from, offer } = data
    console.log('incomming call', from, offer)
  }, [])

  useEffect(() => {
    console.log('sddfgrgrgr')

    socket.on('user-joined-room', handleNewUserJoined)
    socket.on('incomming-call', handleIncommingCall)

    console.log('Sanyam patil')
  }, [socket])
  return <div className='h-[90vh]'></div>
}

export default MainClass
