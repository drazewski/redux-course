import React, { Component } from 'react';

// function UserInfo(props) {
	
//     return (
//         <div className="UserInfo">
//         <h3>Users info</h3>
//             <div className="UserInfo-name">
//                 {
//                 props.userProps.map(user => (
//                     <div className="single-user">
//                         <p><span>Imię: </span><span className="single-user-name" key={props.userProps.indexOf(user)}> {user.name} </span></p>
//                         <p><span>Wiek: </span><span className="single-user-name"> {user.age} </span></p>
//                     </div>
//                 ) )
//                 }
//             </div>
//         </div> 
//     );
// }

// export default UserInfo;


class UserInfo extends Component {
	render() {
		return (
			<div className="UserInfo">
				<h3>Users info</h3>
				<div className="UserInfo-name">
					{
						this.props.userProps.map(user => (
							<div className="single-user">
								<p><span>Imię: </span><span className="single-user-name" key={this.props.userProps.indexOf(user)}> {user.name} </span></p>
								<p><span>Wiek: </span><span className="single-user-name"> {user.age} </span></p>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default UserInfo;