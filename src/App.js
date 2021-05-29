import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
          {/*<a href="/">홈 에이태그</a> a태그를 사용하게되면 페이지 전환하는 과정에서 페이지를 새로불러옴 사용x(렌더링된 컴포넌트들이 모두 사라짐) */}
        </li>
        <li>
          <Link to="/about?detail=true&info=cha&location=soeul">소개</Link>
        </li>
        <li>
          <Link to="/info">소개2</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </switch>
    </div>
  );
};

export default App;
