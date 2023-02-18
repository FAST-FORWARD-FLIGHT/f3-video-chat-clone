import React from "react";
import styled from "styled-components";
import MainBtn from "./MainBtn";

const MainLink: React.FC = () => {
  return (
    <Container>
      <Title>프리미엄 화상 회의를 이제 누구나 무료로 이용할 수 있습니다</Title>
      <Content>
        안전한 비즈니스 회의를 위한 Google Meet 서비스를 누구나 무료로 사용할 수
        있도록 다시 설계했습니다.
      </Content>
      <div>
        <MainBtn />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: inline-flex;
  flex-basis: 35rem;
  flex-direction: column;
  //flex-shrink: 0;
  max-width: 35rem;
  padding: 1em 3em;
`;

const Title = styled.div`
  font-family: "Google Sans Display", Roboto, Arial, sans-serif;
  font-size: 2.75rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 3.25rem;
  padding-bottom: 0.5em;
`;

const Content = styled.div`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.5rem;
  color: #5f6368;
  color: var(--gm-color-caption, #5f6368);
  max-width: 30rem;
  padding-bottom: 3em;
`;
export default MainLink;
