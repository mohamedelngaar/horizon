import { useEffect, useMemo, useRef, useState } from "react";
import { getMeetingId, getToken } from "../../api";

import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";

const chunk = (arr) => {
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, 3));
  return newArr;
};

function MeetingGrid(props) {
  const [joined, setJoined] = useState(false);
  const { join, leave, toggleMic, toggleWebcam, toggleScreenShare } =
    useMeeting();

  const { participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  return (
    <div>
      <header>Meeting ID: {props.meetingId}</header>
      {joined ? (
        <div>
          <button onClick={leave}>Leave</button>
          <button onClick={toggleMic}>Toggle Mic</button>
          <button onClick={toggleWebcam}>Toggle WebCam</button>
          <button onClick={toggleScreenShare}>Toggle Screen Share</button>
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
      {/* <div>
        {chunk([...participants.keys()]).map((k) => (
          <div key={k}>
            {k.map(l)}
          </div>
        ))}
      </div> */}
    </div>
  );
}

function JoinScreen({ updateMeetingId, getMeetingAndToken }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          updateMeetingId(e.target.value);
        }}
      />
      <button onClick={getMeetingAndToken}>Join</button>
      <button onClick={getMeetingAndToken}>Create Meeting</button>
    </div>
  );
}

const VideoCall = () => {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");

  const getMeetingAndToken = async () => {
    const token = await getToken();
    setToken(token);
    setMeetingId(meetingId ? meetingId : await getMeetingId({ token }));
  };

  const updateMeetingId = (meetingId) => {
    setMeetingId(meetingId);
  };

  return token && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "John Doe",
      }}
      token={token}
    >
      <MeetingConsumer>
        {() => (
          <MeetingGrid
            meetingId={meetingId}
            getMeetingAndToken={getMeetingAndToken}
          ></MeetingGrid>
        )}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen
      updateMeetingId={updateMeetingId}
      getMeetingAndToken={getMeetingAndToken}
    ></JoinScreen>
  );
};

export default VideoCall;
