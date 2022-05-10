const DailyBoxOfficeDetailPage = () => {
  return (
    <>
      <div className="contents">
        <div className="detailTop">
          <div className="img">
            <img
              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
              alt="로스트 시티"
            />
          </div>
          <div className="text">
            <h3>로스트 시티</h3>
            <ul>
              <li>
                <span>감독</span> 아론 니, 아담 니
              </li>
              <li>
                <span>개봉일</span> 2022-04-20
              </li>
              <li>
                <span>관객수</span> 5,270
              </li>
              <li>
                <span>스크린수</span> 1,098
              </li>
              <li>
                <span>매출액</span> 239,949,630 원
              </li>
            </ul>
          </div>
        </div>
        <div className="subContent">
          <h4 className="sub_title">시놉시스</h4>
          <div className="sub_desc">
            전설의 트레저를 차지하기 위해 재벌 페어팩스(다니엘 래드클리프)는
            유일한 단서를 알고 있는 베스트셀러 작가 로레타(산드라 블록)를
            납치하게 된다. 어쩔 수 없는 비지니스 관계로 사라진 그녀를 찾아야만
            하는 책 커버모델 앨런(채닝 테이텀)은 의문의 파트너(브래드 피트)와
            함께 위험한 섬에서 그녀를 구하고 무사히 탈출해야만 하는데… 적과
            자연의 위험이 도사리는 일촉즉발 화산섬 대환장 케미의 그들이 생존하여
            섬을 탈출할 수 있을까?
          </div>
          <h4 className="sub_title">sub title2</h4>
          <div className="sub_desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyBoxOfficeDetailPage;
