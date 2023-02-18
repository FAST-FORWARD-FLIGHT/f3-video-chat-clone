import styled from "styled-components";
import BtnBox from "./BtnBox";

const FooterRight = () => {
  return (
    <STBoxFooter>
      <STBoxBtn>
        <BtnBox />
      </STBoxBtn>
    </STBoxFooter>
  );
};

const STBoxFooter = styled.div`
  justify-content: flex-end;
  margin-right: 18px;
  align-items: center;
  display: flex;
  flex: 1 1 25%;
  text-align: center;
  white-space: nowrap;
`;
const STBoxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  vertical-align: middle;
  flex-grow: 1;
`;

export default FooterRight;
