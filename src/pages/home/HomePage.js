import Slider from '../../components/slider/Slider';

const HomePage = () => {
  const sliderItem = [
    {
      name: '1',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85715/85715_320.jpg',
    },
    {
      name: '2',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85712/85712_320.jpg',
    },
    {
      name: '3',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85791/85791_320.jpg',
    },
    {
      name: '4',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85772/85772_320.jpg',
    },
    {
      name: '5',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85780/85780_320.jpg',
    },
    {
      name: '6',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg',
    },
  ];
  return (
    <>
      <Slider sliders={sliderItem} />
    </>
  );
};

export default HomePage;
