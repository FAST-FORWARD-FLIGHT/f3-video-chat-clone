import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

const ChatHeader = () => {
  return (
    <>
      <STChatHeader>
        <STHeaderText>회의 중 메시지</STHeaderText>
        <STHeaderCloseBox>
          <VscChromeClose style={{ width: "24px", height: "24px" }} />
        </STHeaderCloseBox>
      </STChatHeader>
      <div>
        <STSecondHeaderBox>
          <STSecondHeaderText>
            모든 사용자가 메시지를 보낼 수 있도록 허용
          </STSecondHeaderText>
          <input
            type="range"
            min="0"
            max="1"
            style={{ width: "36px", accentColor: "#c7c7c7", cursor: "pointer" }}
          />
        </STSecondHeaderBox>
      </div>
      <STThirdHeaderBox>
        <STThirdHeaderText>
          메시지는 통화 중인 사람에게만 표시되며 통화가 끝나면 삭제됩니다.
        </STThirdHeaderText>
      </STThirdHeaderBox>
    </>
  );
};

const STChatHeader = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 4rem;
  min-height: 4rem;
  padding-left: 1.5rem;
`;

const STHeaderText = styled.div`
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
`;

const STHeaderCloseBox = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  :hover {
    background-color: #eee;
  }
`;

const STSecondHeaderBox = styled.div`
  background: #f1f3f4;
  border-radius: 4px;
  margin: 0.75rem;
  padding: 0.75rem;
  align-items: center;
  display: flex;
  margin-top: 1.125rem;
  justify-content: space-between;
`;
const STSecondHeaderText = styled.div`
  letter-spacing: 0.025em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const STThirdHeaderBox = styled.div`
  height: 56px;
  letter-spacing: 0.025em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  background: #f1f3f4;
  border-radius: 8px;
  margin: 0.75rem;
  padding: 0.75rem;
  text-align: center;
  align-items: baseline;
`;

const STThirdHeaderText = styled.div`
  letter-spacing: 0.025em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  background: #f1f3f4;
  border-radius: 8px;
  /* margin: 0.75rem; */
  padding: 0.75rem;
  text-align: center;
`;
export default ChatHeader;
