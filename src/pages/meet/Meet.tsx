import styled from "styled-components";
import FooterBox from "./component/footerLeft/FooterBox";
import { getCookie } from "../../shared/Cookie";

const Meet = () => {
  console.log(getCookie("userImg"));
  const imgUrl = getCookie("userImg");

  return (
    <STContents>
      <STImage url={imgUrl} />
      <FooterBox></FooterBox>
    </STContents>
  );
};

const STContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2a2a;
  width: 100vw;
  height: 100vh;
`;
const STImage = styled.div<{ url: string }>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.url});
`;

export default Meet;
