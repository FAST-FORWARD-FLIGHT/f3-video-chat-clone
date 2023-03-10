import React, {
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";

import {
  IoMicOffOutline,
  IoMicOutline,
  IoVideocamOffOutline,
  IoVideocamOutline,
} from "react-icons/io5";
interface VideoProps {
  setAudio: Dispatch<SetStateAction<boolean>>;
  setVideo: Dispatch<SetStateAction<boolean>>;
  audio: boolean;
  video: boolean;
}
const Stream: React.FC<VideoProps> = ({ audio, setAudio, video, setVideo }) => {
  const myFaceRef = useRef<HTMLVideoElement>(null);

  const getUserMedia = async () => {
    if (video === true) {
      const containts = { audio, video: { width: 600, height: 400 } };
      try {
        let stream: MediaStream | null =
          await navigator.mediaDevices.getUserMedia(containts);
        if (myFaceRef.current) {
          myFaceRef.current.srcObject = stream;
          myFaceRef.current.onloadedmetadata = () => {
            myFaceRef.current && myFaceRef.current.play();
          };
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (video === false) {
      const containts = { audio, video: { width: 600, height: 400 } };
      try {
        let stream = await navigator.mediaDevices.getUserMedia(containts);
        if (myFaceRef.current) {
          myFaceRef.current.srcObject = stream;
          myFaceRef.current.onloadedmetadata = () => {
            return null;
          };
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onClickAudioBtn = () => {
    setAudio(!audio);
  };

  const onClickVideoBtn = () => {
    setVideo(!video);
  };

  useEffect(() => {
    getUserMedia();
  }, [audio, video]);

  return (
    <Container>
      <Video
        width="600"
        height="400"
        ref={myFaceRef}
        style={{
          textAlign: "center",
        }}
      ></Video>
      <Icon>
        <div>
          {audio ? (
            <IoMicOffOutline
              onClick={onClickAudioBtn}
              color="red"
              size="50px"
            />
          ) : (
            <IoMicOutline onClick={onClickAudioBtn} color="red" size="50px" />
          )}
        </div>
        <div>
          {video ? (
            <IoVideocamOffOutline
              onClick={onClickVideoBtn}
              color="red"
              size="50px"
            />
          ) : (
            <IoVideocamOutline
              onClick={onClickVideoBtn}
              color="red"
              size="50px"
            />
          )}
        </div>
      </Icon>
    </Container>
  );
};
export default Stream;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Video = styled.video`
  border-radius: 9px;
`;
const Icon = styled.div`
  position: relative;
  top: -49px;
  z-index: 999;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
