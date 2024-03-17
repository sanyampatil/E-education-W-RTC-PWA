import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const MainRoom = () => {
  const { roomId } = useParams()
  const MyMeeting = async element => {
    const appID = 862721783

    const serverSecret = '0c2c6e48f6a791a4e5ebc79077b0b564'
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'sanyam'
    )
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference
      }
    })
  }

  return (
    <div>
      <div
        ref={MyMeeting}
        className=' pt-20 flex items-center justify-center w-[100vw] h-[100vh] '
      ></div>
    </div>
  )
}

export default MainRoom
