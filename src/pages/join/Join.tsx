import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCookie, setCookie } from "../../shared/Cookie";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Stream from "./component/Stream";
import { db } from "../../server/firebase";
const Join = () => {
  const { roomId } = useParams();
  const [email, setEmail] = useState("");
  const [audio, setAudio] = useState<boolean>(false);
  const [video, setVideo] = useState<boolean>(true);
  const navigate = useNavigate();
  let dataId: string[] = [];

  const getUserEmail = () => {
    setEmail(getCookie("email"));
    if (email === undefined) {
      navigate("/");
    }
  };

  const onClickJoinBtn = async () => {
    const dataList = await getDocs(collection(db, "meetting"));
    dataList.forEach(data => {
      return dataId.push(data.data().roomId);
    });
    checkRoomId();
  };

  const checkRoomId = async () => {
    dataId.map(id => {
      if (id === roomId) {
        setCookie("audio", audio);
        setCookie("video", video);
        return navigate(`/meet/${id}`);
      }
    });
  };

  useEffect(() => {
    getUserEmail();
  }, [email]);

  return (
    <Container>
      <Head>
        <ImgBox>
          <LogoImg src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
        </ImgBox>
        <Profile>{email}</Profile>
      </Head>
      <Body>
        <CameraArea>
          <Stream
            audio={audio}
            setAudio={setAudio}
            video={video}
            setVideo={setVideo}
          />
        </CameraArea>
        <Box>
          <div>참여할 준비가 되셨나요?</div>
          <BtnBox>
            <JoinBtn onClick={onClickJoinBtn}>지금 참여하기</JoinBtn>
            <ScreenBtn>발표하기</ScreenBtn>
          </BtnBox>
        </Box>
      </Body>
    </Container>
  );
};
export default Join;
const Container = styled.div``;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImgBox = styled.div`
  width: 40vw;
  padding-right: 30px;
  margin-left: 20px;
`;

const LogoImg = styled.img`
  width: 190px;
  height: 65px;
`;

const Profile = styled.button`
  color: #2a2a2a;
  font-size: medium;
  padding: 20px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  //position: absolute;
  //background-color: #444482;
  font-weight: 350;
  font-size: 20px;
  color: #2a2a2a;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 2.25rem;
`;

const JoinBtn = styled.button`
  outline: 0;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  background: rgb(26, 115, 232);
  color: white;
  width: 150px;
  height: 60px;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 30px;
  margin: 20px;
  box-shadow: 2px 2px 2px lightgray;
`;
const CameraArea = styled.div`
  height: 400px;
  width: 600px;
  background-color: #222222;
  color: white;
  border-radius: 9px;
  //display: center;
  //justify-content: center;
  align-items: center;

  //margin: auto;
  //text-align: center;
  /* justify-content: center;
    text-align: center;
    align-items: center; */
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ScreenBtn = styled.button`
  margin: 20px;
  padding: 15px;
  color: #1a73e8;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  width: 150px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;
const BtnBox = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
`;
