import styled from "styled-components";

const HeaderQuestionToggle = () => {
  return (
    <STBox>
      <STBoxQuestion>
        <STContainer>
          <STList>도움말</STList>
          <STList>서비스 약관</STList>
          <STList>개인정보처리방침</STList>
          <STList>약관요약</STList>
        </STContainer>
      </STBoxQuestion>
    </STBox>
  );
};

const STBox = styled.div`
  color: rgb(95, 99, 104);
  text-align: initial;
  line-height: 0;
  -webkit-user-select: none;
  white-space: nowrap;
  font: 13px/27px Roboto, Arial, sans-serif;
  min-width: 320px;
  position: relative;
  transition: box-shadow 250ms;
  display: flex;
  align-items: center;
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
`;
const STBoxQuestion = styled.div`
  transform-origin: right top;
  right: 0px;
<<<<<<< HEAD
<<<<<<< HEAD
  top: 0px;
=======
  top: 48px;
>>>>>>> c534daf (edit header question btn)
=======
  top: 0px;
>>>>>>> 058b7bc (#43 [EDIT] header question props 전달)
  max-height: 745px;
  min-width: 17.5rem;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  display: inline-block;
  transform: scale(1);
  opacity: 1;
  max-width: var(--mdc-menu-max-width, calc(100vw - 32px));
  position: absolute;
  overflow: auto;
  will-change: transform, opacity;
  z-index: 8;
  border-radius: 4px;
  transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1),
    height 250ms cubic-bezier(0, 0, 0.2, 1);
`;

const STContainer = styled.ul`
  font-family: Roboto, Arial, sans-serif;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
  color: #000;
  position: relative;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
const STList = styled.li`
  -webkit-user-select: none;
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: transform, opacity;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  padding-left: 16px;
  padding-right: 16px;
  height: 48px;
  font-family: Roboto, Arial, sans-serif;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
  color: #000;\
`;
export default HeaderQuestionToggle;
