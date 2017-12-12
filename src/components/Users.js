import React from 'react'

function UserInfo(props) {
    
    return (
        <div className="UserInfo">
            <div className="UserInfo-name">
                {
                props.userProps.map(user => (
                    <div className="single-user">
                        <span key={props.userProps.indexOf(user)}> {user.name} </span>
                        <span> {user.age} </span>
                    </div>
                ) )
                }
            </div>
        </div>
       
    );
}

export default UserInfo;
