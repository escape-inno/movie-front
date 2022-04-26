const DailyBoxOfficePage = () => {
  return (
    <>
      <h2 className="subTitle">일일박스오피스</h2>
      <div className="filterBox">
        <ul>
          <li>
            조회 : <input type={'data'} />
          </li>
          <li>
            국적 : <input type={'text'} />
          </li>
          <li>
            영화장르 : <input type={'text'} />
          </li>
        </ul>
        <div>
          <button>조회</button>
        </div>
      </div>

      <div className="contents">
        <div className="total">총 240건</div>
        <div className="listWrap">
          <div className="listBox">
            <div className="list-img">
              <img
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
                alt="로스트 시티"
              />
            </div>
            <div className="list-txt">
              <h3>로스트 시티</h3>
              <ul>
                <li>개봉일 : 2022-04-20</li>
                <li>관객수 : 5,270</li>
                <li>스크린수 : 1,098</li>
                <li>매출액 : 239,949,630 원</li>
              </ul>
              <button>상세보기</button>
            </div>
          </div>
          <div className="listBox">
            <div className="list-img">
              <img
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
                alt="로스트 시티"
              />
            </div>
            <div className="list-txt">
              <h3>로스트 시티</h3>
              <ul>
                <li>개봉일 : 2022-04-20</li>
                <li>관객수 : 5,270</li>
                <li>스크린수 : 1,098</li>
                <li>매출액 : 239,949,630 원</li>
              </ul>
              <button>상세보기</button>
            </div>
          </div>
          <div className="listBox">
            <div className="list-img">
              <img
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
                alt="로스트 시티"
              />
            </div>
            <div className="list-txt">
              <h3>로스트 시티</h3>
              <ul>
                <li>개봉일 : 2022-04-20</li>
                <li>관객수 : 5,270</li>
                <li>스크린수 : 1,098</li>
                <li>매출액 : 239,949,630 원</li>
              </ul>
              <button>상세보기</button>
            </div>
          </div>
          <div className="listBox">
            <div className="list-img">
              <img
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
                alt="로스트 시티"
              />
            </div>
            <div className="list-txt">
              <h3>로스트 시티</h3>
              <ul>
                <li>개봉일 : 2022-04-20</li>
                <li>관객수 : 5,270</li>
                <li>스크린수 : 1,098</li>
                <li>매출액 : 239,949,630 원</li>
              </ul>
              <button>상세보기</button>
            </div>
          </div>
          <div className="listBox">
            <div className="list-img">
              <img
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85787/85787_320.jpg"
                alt="로스트 시티"
              />
            </div>
            <div className="list-txt">
              <h3>로스트 시티</h3>
              <ul>
                <li>개봉일 : 2022-04-20</li>
                <li>관객수 : 5,270</li>
                <li>스크린수 : 1,098</li>
                <li>매출액 : 239,949,630 원</li>
              </ul>
              <button>상세보기</button>
            </div>
          </div>
        </div>
        <div className="pagination">
          <span>prev</span>
          <ul>
            <li class="active}">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <span>next</span>
        </div>
      </div>
    </>
  );
};

export default DailyBoxOfficePage;
