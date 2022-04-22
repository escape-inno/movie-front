import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide({ sliders }) {
  return (
    <Container>
      <SlideTitle>일별 박스오피스</SlideTitle>
      <StyledSlider {...settings}>
        {sliders.map(({ name, image }, index) => {
          return (
            <CardBox key={index}>
              <CardImg src={image}></CardImg>
              <CardText>{name}</CardText>
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

export default Slide;

// 슬라이드 설정
const settings = {
  dots: false, // 슬라이드 밑에 점 보이게
  infinite: true, // 무한으로 반복
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000, // 넘어가는 속도
  slidesToShow: 4, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};

const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;

const Container = styled.div`
  margin-right: 25px;
`;

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1200px;
    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    margin-top: 0;
    bottom: -0;
  }

  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 45px;
  }

  .slick-track {
    /* overflow-x: hidden; */
  }
`;

const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 285px;
  height: 360px;
`;

const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
