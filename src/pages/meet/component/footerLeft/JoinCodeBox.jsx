import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const JoinCodeBox = () => {
  const joinCode = useParams().roomId;
  const date = new Date().toLocaleTimeString().split(":");
  const currentTime = `${date[0]}:${date[1]}`;
  return (
    <div>
      <STJoinCodeBox>
        <STCode>
          <div>
            {currentTime} <span> | </span> {joinCode}
          </div>
        </STCode>
      </STJoinCodeBox>
    </div>
  );
};

const STJoinCodeBox = styled.div``;

const STCode = styled.div`
  display: flex;

  color: white;

  span {
    margin: 10px;
  }
`;
