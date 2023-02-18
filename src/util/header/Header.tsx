import React, { useState } from "react";
import styled from "styled-components";
import HeaderBtn from "./HeaderBtn";
import HeaderTime from "./HeaderTime";
import Login from "../user/Login";
import HeaderQuestionToggle from "./HeaderQuestionToggle";
const Header = () => {
  const [question, setQuestion] = useState(false);
  return (
    <>
      <Container>
        <ImgBox>
          <STImgLogo src="https://res.cloudinary.com/softwarepundit/image/upload/c_lfill/dpr_1.0/f_auto/h_800/q_auto/w_800/v1/software/google-meet-logo" />
        </ImgBox>
        <STBoxTimeBtn>
          <HeaderTime />
          <HeaderBtn setQuestion={setQuestion} question={question} />
        </STBoxTimeBtn>
        <LoginBtn>
          <Login />
        </LoginBtn>
      </Container>
      {question && <HeaderQuestionToggle />}
    </>

  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  padding: 8px;
  justify-content: space-between;
  display: flex;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: background-color;
`;
const ImgBox = styled.div`
  width: 40vw;
  padding-right: 30px;
  margin-left: 20px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
  align-items: center;
`;

//STImgLogo
const STImgLogo = styled.img`
  width: 190px;
  height: 65px;
`;

//STBoxTimeBtn
const STBoxTimeBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  justify-content: space-between;
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
  --mdc-font-size: 2vmin;
  --gm-button--font-size: 1em;
`;

const LoginBtn = styled.div`
  box-sizing: border-box;
  height: 48px;
  line-height: normal;
  padding: 0 4px;
  padding-left: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  --mdc-font-size: 2vmin;
  --gm-button--font-size: 1em;
`;
export default Header;
