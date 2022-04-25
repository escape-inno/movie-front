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
        {sliders.map(({ ranking, title, releaseDate, image }, index) => {
          return (
            <CardBox key={index}>
              <CardImgBox>
                <CardRanking>{ranking}</CardRanking>
                <CardImg src={image}></CardImg>
              </CardImgBox>
              <CardTitle>{title}</CardTitle>
              <CardText>개봉 : {releaseDate}</CardText>
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
  autoplay: true,
  initialSlide: 0,
  centerMode: false,
  speed: 500,
  autoplaySpeed: 2000, // 넘어가는 속도
  slidesToShow: 5, // 5장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
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

const CardImgBox = styled.div`
  position: relative;
  width: 224px;
  height: 319px;
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 319px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.09) 35%,
      rgba(0, 0, 0, 0.85)
    );
    content: '';
  }
  &:hover strong {
    transition: all 0.3s ease-out;
    display: none;
  }
  &:hover::before {
    transition: all 0.3s ease-out;
    background: rgba(0, 0, 0, 0.6);
  }
  ::after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -75px;
    content: '상세보기';
    text-align: center;
    line-height: 50px;
    width: 150px;
    height: 50px;
    background: #fff;
    color: #333;
    font-weight: bold;
    border-radius: 5px;
    z-index: -1;
    opacity: 0;
  }
  &:hover::after {
    transition: all 0.3 ease-in-out;
    opacity: 0.9;
    z-index: 1;
  }
`;

const CardRanking = styled.strong`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 70px;
  color: #fff;
  padding: 0 10px;
  line-height: 1;
  font-style: italic;
`;

const CardImg = styled.img`
  width: 224px;
  height: 319px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  width: 224px;
  padding: 20px 0;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardText = styled.p`
  font-size: 15px;
  color: #444;
`;
