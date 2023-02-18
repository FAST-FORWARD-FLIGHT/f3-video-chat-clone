import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDatabase, ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";

interface Chat {
  chatTime: string;
  content: string;
  userNick: string;
}

interface ChatData extends Array<Chat> {}

const ChatBody = () => {
  const [chatData, setChatData] = useState<ChatData>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { roomId } = useParams();
  const database = getDatabase();
  const locate = ref(database, `chat/${roomId}`);

  useEffect(() => {
    getChatList();
  }, []);

  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
  }, [chatData]);

  const getChatList = async () => {
    let obj = {};
    await onValue(locate, data => {
      obj = data.val();
      if (obj !== null) {
        setChatData(Object.values(obj));
      }
    });
  };

  return (
    <STChatBodyBox ref={scrollRef}>
      {chatData.map((chat: Chat, i) => {
        return (
          <STChat key={i}>
            <STChatNickTimeBox>
              <STChatNick>{chat.userNick}</STChatNick>
              <STChatTime>{chat.chatTime}</STChatTime>
            </STChatNickTimeBox>
            <STChatContent>{chat.content}</STChatContent>
          </STChat>
        );
      })}
    </STChatBodyBox>
  );
};

const STChatBodyBox = styled.div`
  box-sizing: border-box;
  flex: 1;
  min-height: 2.25rem;
  overflow-y: auto;
  padding-bottom: 0.5rem;
  -webkit-user-select: text;
  width: 100%;
  text-align: left;
  direction: ltr;
  font-family: "Roboto", arial, sans-serif;
  font-size: 0.75rem;
`;

const STChat = styled.div`
  display: flex;
  padding: 0.75rem 1.5rem 0.875rem;
  justify-content: center;
  flex-direction: column;
`;
const STChatNickTimeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const STChatNick = styled.div`
  color: #202124;
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.25;
  padding-bottom: 0.1875rem;
  padding-top: 0.25rem;
  padding-right: 0.5rem;
  word-wrap: break-word;
`;
const STChatTime = styled.div`
  color: #5f6368;
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1.5;
  padding-top: 0.1875rem;
`;
const STChatContent = styled.div`
  max-width: 100%;
  color: #202124;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  padding-top: 0.625rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: -10px;
`;
export default ChatBody;
