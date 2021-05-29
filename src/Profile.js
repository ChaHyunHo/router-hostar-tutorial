import React from "react";
import { withRouter} from 'react-router-dom';
import WithRouterSample from "./WithRouterSample";

const data = {
    hostar : {
        name : '차현호',
        description : '차현호는 리액트를 공부중이다',
    },

    mom : {
        name : '서화석',
        description : '현호의 어무니 이름',
    }

}

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않은 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default withRouter(Profile);