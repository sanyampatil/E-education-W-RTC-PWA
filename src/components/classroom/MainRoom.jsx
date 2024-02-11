import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const MainRoom = () => {
  const { roomId } = useParams()
  const MyMeeting = async element => {
    const appID = 2082587824
    const serverSecret = "780a293a84f45f842627da8b047a033d"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "sanyam"
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
      <div ref={MyMeeting}></div>
    </div>
  )
}

export default MainRoom


