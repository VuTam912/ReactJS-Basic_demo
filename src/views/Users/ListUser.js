import React, { Component } from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from 'react-router-dom';
// AXIOS

class ListUser extends Component {
	state = {
		listUsers: [],
	};

	// khi chay xong render thi componentDidMount khong thuc thi
	async componentDidMount() {
		// axios.get('https://reqres.in/api/users?page=1').then((res) => {
		// 	console.log('check res: ', res.data.data);
		// });
		let res = await axios.get('https://reqres.in/api/users?page=1');
		console.log('check res: ', res.data.data);
		this.setState({
			listUsers: res && res.data && res.data.data ? res.data.data : [],
		});
	}

	// de chuyen huong URL nen su dung withRouter cua react-router
	// va props se nhan thong tin tu withRouter.
	handleViewDetailUser = (user) => {
		console.log('CHECK', this.props);
		// chuyen trang URL
		this.props.history.push(`/user/${user.id}`);
	};

	render() {
		let { listUsers } = this.state;

		return (
			<div className='list-user-container'>
				<div className='title'>Fetch all List User </div>
				<div className='list-user-content'>
					{/* check listUsers co data ko ? */}
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<div
									className='child'
									key={item.id}
									onClick={() => this.handleViewDetailUser(item)}
								>
									{index + 1} - {item.first_name} {item.last_name}
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default withRouter(ListUser);
