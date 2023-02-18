import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const MainImg: React.FC = () => {
  return (
    <Container>
      <ImgBox>
        <ImgSlider />
      </ImgBox>
    </Container>
  );
};
const Container = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  flex-basis: 45%;
  overflow: hidden;
  padding: 1em 3em;
  //flex-shrink: 0;
`;

const ImgBox = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 445px;
  font-size: 1rem;
`;
export default MainImg;
