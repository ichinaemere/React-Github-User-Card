import React from 'react';

const UserFollowers = (props) => {
    return (
        <div>
            {props.userFollowers.map(follower =>{
            console.log(follower)
            return (
                <div>
                {props.follower.login}
                </div>
            )
            })}
        </div>
    )
} 

export default UserFollowers;