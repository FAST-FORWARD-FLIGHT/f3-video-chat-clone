import React, { useRef } from "react";
import styled from "styled-components";
import { CiPaperplane } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { database } from "../../../../server/firebase";
import { push, ref } from "firebase/database";
import { getCookie } from "../../../../shared/Cookie";

const ChatFooter = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { roomId } = useParams();

  const locate = ref(database, `chat/${roomId}`);

  const onSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLOrSVGElement>,
  ) => {
    event.preventDefault();
    const timeList = new Date().toLocaleTimeString().split(":");
    const time = `${timeList[0]}:${timeList[1]}`;
    const userNick = getCookie("userName");
    if (inputRef.current?.value !== "") {
      const data = {
        userNick: userNick,
        chatTime: time,
        content: inputRef.current?.value,
        roomId: roomId,
      };
      push(locate, data);
    }


    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <STChatFooterBox>
      <STChatFooterInner onSubmit={e => onSubmit(e)}>
        <STInputBox>
          <STInput ref={inputRef} />
          <CiPaperplane
            onClick={event => onSubmit(event)}
            style={{
              width: "24px",
              height: "24px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        </STInputBox>
      </STChatFooterInner>
    </STChatFooterBox>
  );
};

const STChatFooterBox = styled.div`
  background: #f1f3f4;
  border-radius: 25px;
  display: flex;
  min-height: 2.25rem;
  margin: 0.9375rem;
  overflow: hidden;
  position: relative;
`;

const STChatFooterInner = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const STInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  flex-grow: 1;
  font-family: "Roboto", arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
`;

const STInput = styled.input`
  padding-right: 16px;
  padding-left: 16px;
  background: transparent;
  outline: none;
  border: hidden;
`;
export default ChatFooter;
