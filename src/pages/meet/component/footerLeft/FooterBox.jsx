import React from "react";
import styled from "styled-components";
import FooterRight from "../footerRight/FooterRight";
import { JoinCodeBox } from "./JoinCodeBox";
const FooterBox = () => {
  return (
    <STContainer>
      <JoinCodeBox />
      <FooterRight />
    </STContainer>
  );
};
const STContainer = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0px;
  left: 0px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export default FooterBox;
