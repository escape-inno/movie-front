import Slider from '../../components/slider/Slider';

const HomePage = () => {
  const sliderItem = [
    {
      ranking: '1',
      title: '닥터 스트레인지-대혼돈의 멀티버스',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85715/85715_320.jpg',
    },
    {
      ranking: '2',
      title: '신비한 동물들과 덤블도어의 비밀',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85712/85712_320.jpg',
    },
    {
      ranking: '3',
      title: '세븐틴 파워 오브 러브 - 더 무비',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85791/85791_320.jpg',
    },
    {
      ranking: '4',
      title: '앵커',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85772/85772_320.jpg',
    },
    {
      ranking: '5',
      title: '공기 살인',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85780/85780_320.jpg',
    },
    {
      ranking: '6',
      title: '로스트 시티',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg',
    },
    {
      ranking: '7',
      title: '니 부모 얼굴이 보고 싶다',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85821/85821_320.jpg',
    },
    {
      ranking: '8',
      title: '봄날',
      releaseDate: '2022.05.04',
      image:
        'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85799/85799_320.jpg',
    },
  ];
  return (
    <>
      <Slider sliders={sliderItem} />
    </>
  );
};

export default HomePage;
