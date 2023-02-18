import styled from "styled-components";
import {
  BiInfoCircle,
  BiCategoryAlt,
  BiCommentDetail,
  BiGroup,
  BiLock,
} from "react-icons/bi";

const BtnBox = () => {
  return (
    <>
      <Button>
        <BiInfoCircle style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button>
        <BiGroup style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button>
        <BiCommentDetail style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button>
        <BiCategoryAlt style={{ width: "22px", height: "22px" }} />
      </Button>
      <Button>
        <BiLock style={{ width: "22px", height: "22px" }} />
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  :hover {
    background-color: #3c3939;
  }
`;
export default BtnBox;
