import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { SlQuestion, SlBubble, SlSettings } from "react-icons/sl";

interface AboutProps {
  setQuestion: Dispatch<SetStateAction<boolean>>;
  question: boolean;
}

const HeaderBtn: React.FC<AboutProps> = ({ setQuestion, question }) => { 
  return (
    <>
      <Button>
        <SlQuestion

          onClick={() => setQuestion(!question)}
          style={{ width: "24px", height: "24px" }}
        />
      </Button>
      <Button>
        <SlBubble style={{ width: "24px", height: "24px" }} />
      </Button>
      <Button>
        <SlSettings style={{ width: "24px", height: "24px" }} />
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  :hover {
    background-color: #eee;
  }
`;

export default HeaderBtn;
