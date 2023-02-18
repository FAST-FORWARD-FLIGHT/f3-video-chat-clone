import React, { useRef, useState } from "react";
import { db } from "../../../server/firebase";
import styled from "styled-components";
import { MdOutlineVideoCall } from "react-icons/md";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { nanoid } from "nanoid";
import { To, useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/Cookie";
import signInWithGoogle from "../../../shared/SignInWithPopup";

interface NavigateFunction {
  (to: To): void;
}

const MainBtn = () => {
  const [onFocused, setOnFocused] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();
  const id = nanoid();
  const inputRef = useRef<HTMLInputElement>(null);
  let dataId: string[] = [];

  const onClickAddBtn = async () => {
    if (getCookie("token") !== undefined) {
      const userId = getCookie("email");
      const data = {
        userId: userId,
        roomId: id,
      };
      await addDoc(collection(db, "meetting"), data);
      navigate(`/meet/${data.roomId}`);
    }
    if (getCookie("token") === undefined) {
      signInWithGoogle();
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
    dataId.map((id: string) => {
      if (id === inputRef.current?.value) {
        return navigate(`/join/${id}`);
      } else {
        return setJoin(true);
      }
    });
  };

  return (
    <Container>
      <CreateBtn onClick={() => onClickAddBtn()}>
        <MdOutlineVideoCall
          style={{ marginRight: "0.5rem", width: "20px", height: "20px" }}
        />
        새 회의
      </CreateBtn>
      <JoinInput
        placeholder="코드 또는 링크 입력"
        ref={inputRef}
        onKeyDown={() => {
          setOnFocused(true);
          setJoin(false);
        }}
      />
      <JoinBtn onClick={() => onClickJoinBtn()} visual={onFocused}>
        참여
      </JoinBtn>
      {join && <p>참여 코드를 다시 확인해주세요</p>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CreateBtn = styled.button`
  border-radius: 4px;
  position: relative;
  background-color: var(--gm-fillbutton-container-color, #1a73e8);
  color: var(--gm-fillbutton-ink-color, #fff);
  font-size: 1rem;
  padding: 0 16px 0 12px;
  transition-duration: 280ms, 280ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s, 0s;
  transition-property: border, box-shadow;
  box-shadow: none;
  height: 3em;
  margin-bottom: 1em;
  margin-right: 1.5em;
  white-space: nowrap;
  outline: 1px solid transparent;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  vertical-align: middle;
`;
const JoinInput = styled.input`
  margin-top: 0.1rem;
  max-width: 20em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  border-radius: 4px;
  height: 3.4em;
  min-width: 17em;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 12em;
  padding-right: max(16px, var(--mdc-shape-small, 4px));
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms;
  /* transition-property: opacity; */

  :focus {
    outline: none;
  }
`;

const JoinBtn = styled.button<{ visual: boolean }>`
  visibility: ${props => (props.visual ? "visible" : "hidden")};
  margin-left: 20px;
  font-size: 1em;
  height: 3em;
  margin-top: 6px;
  margin-bottom: 1em;
  margin-right: 1.5em;
  white-space: nowrap;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  padding: 0 8px 0 8px;
  min-width: 64px;
`;

export default MainBtn;
