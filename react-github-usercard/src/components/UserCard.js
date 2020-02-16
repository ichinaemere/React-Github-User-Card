import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <img src={props.userData.avatar_url} alt="github-pic" />
            <h2>{props.userData.name}</h2>
            <h3>{props.userData.login}</h3>
        </div>
    ) 

}
export default UserCard;