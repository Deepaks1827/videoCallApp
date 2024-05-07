import React from 'react'
import { useParams } from 'react-router-dom'

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVERSECRET } from './constant';

const Videopage = () => {
    const {id} = useParams();
     const roomID = id;
    
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID =APP_ID ;
    const serverSecret = SERVERSECRET;
    
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  'Shukla');


   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
}
    return (
        <div ref={myMeeting}>
          
        </div>
      )
 
}
export default Videopage;

