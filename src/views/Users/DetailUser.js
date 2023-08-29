import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DetailUser extends Component {
	state = {
		user: {},
	};

	async componentDidMount() {
		if (this.props.match && this.props) {
			let id = this.props.match.params.id;

			let res = await axios.get(`https://reqres.in/api/users/${id}`);
			this.setState({
				user: res && res.data && res.data.data ? res.data.data : {},
			});
			console.log('>>> CHeck res user', res);
		}
	}

	handleBackButton = () => {
		// phải có withRouter.
		// quay lai trang
		this.props.history.goBack();
	};

	render() {
		let { user } = this.state;
		let isEmptyObj = Object.keys(user).length === 0;
		return (
			<>
				<div>
					hello world from detial user with id: {this.props.match.params.id}{' '}
				</div>
				{isEmptyObj === false && (
					<>
						<div>
							User's name : {user.first_name} - {user.last_name}
						</div>
						<div>User's email : {user.email}</div>
						<div>
							<img src={user.avatar} />
						</div>
						<div>
							<button
								type='button'
								onClick={() => {
									this.handleBackButton();
								}}
							>
								Back
							</button>
						</div>
					</>
				)}
			</>
		);
	}
}

// wrapper DetailUser de lay object match (URL)
export default withRouter(DetailUser);
