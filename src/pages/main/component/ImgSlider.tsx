import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <STNextBtn>
        <SlArrowRight style={{ width: "20px", height: "20px" }}></SlArrowRight>
      </STNextBtn>
    ),
    prevArrow: (
      <STPrevBtn>
        <SlArrowLeft style={{ width: "20px", height: "20px" }}></SlArrowLeft>
      </STPrevBtn>
    ),
  };

  interface Img {
    url: string;
    title: string;
    content: string;
  }

  const imgList = [
    {
      url: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
      title: "공유 가능한 링크 받기",
      content:
        "새 회의를 클릭하여 회의에 초대할 사용자에게 보낼 링크를 받으세요.",
    },
    {
      url: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
      title: "회의 일정 예약",
      content:
        "Google Calendar에서 회의를 예약하고 참여자에게 초대장을 보내래면 새 회의를 클릭하세요.",
    },
    {
      url: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
      title: "안전한 회의",
      content: "주최자가 초대했거나 허용한 사용자만 회의에 참여할 수 있습니다.",
    },
  ];

  return (
    <Container>
      <StyledSlide {...settings}>
        {imgList.map((img: Img, i: number) => {
          return (
            <ImgBox key={i} id={`${i}`}>
              <img src={img.url} alt="img" />
              <h4 style={{ margin: "7px" }}>{img.title}</h4>
              <p>{img.content}</p>
            </ImgBox>
          );
        })}
      </StyledSlide>
    </Container>
  );
};

const Container = styled.div`
  width: 20.625rem;
  margin: 0 auto;
  display: block;
`;
const ImgBox = styled.div`
  display: block;
  width: 20.625rem;
  height: 25rem;
  text-align: center;
`;
const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    position: absolute;
    width: 20.625rem;
    height: 25rem;
    margin: 0 auto;
    overflow: hidden;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    top: 26rem;
  }

  .slick-prev {
    position: absolute;
    top: 160px;
    left: -50px;
    cursor: pointer;
    z-index: 100;
    color: black;
  }

  .slick-next {
    position: absolute;
    top: 160px;
    left: 350px;
    cursor: pointer;
    color: black;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const STPrevBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;

  :hover {
    opacity: 40%;
  }
`;

const STNextBtn = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  :hover {
    opacity: 40%;
  }
`;
export default ImgSlider;
