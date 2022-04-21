import { Link } from 'react-router-dom';
import Gnb from './Gnb';

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to="/">무비무비</Link>
        </h1>
        <div className="searchBoxArea">
          <div className="searchBox">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>검색</button>
          </div>
        </div>
      </div>
      <Gnb />
    </header>
  );
};

export default Header;
