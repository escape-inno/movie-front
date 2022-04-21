import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <nav>
      <ul className="inner">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/dailyBoxOffice">일일 박스오피스</Link>
        </li>
        <li>
          <Link to="/movie">영화</Link>
        </li>
        <li>
          <Link to="/moviePeople">영화인</Link>
        </li>
        <li>
          <Link to="/movieCompany">영화사</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
