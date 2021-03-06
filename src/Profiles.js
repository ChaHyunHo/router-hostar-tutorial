import React from "react";
import {Link, NavLink, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white',
    };
  return (
    <div>
      <h3>사용자 목록:</h3>

      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/hostar">hostar</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/mom">mom</NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact={true}
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
