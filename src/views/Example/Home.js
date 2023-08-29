import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Color from '../HOC/Color';
import logo from '../../assets/images/1685279753620.png';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class Home extends Component {
	// thu thi sau khi render xong
	componentDidMount() {
		// setTimeout(() => {
		// 	this.props.history.push('/todo');
		// }, 3000);
	}

	// gui action to reducer
	handleDeleteUser = (user) => {
		this.props.deleteUserRedux(user);
	};

	handleCreateUser = () => {
		this.props.addUserRedux();
	};

	render() {
		console.log('>>Check props: ', this.props.dataRedux);
		let listUsers = this.props.dataRedux;
		return (
			<>
				<div>Hello world from Homepage with ...</div>
				<div>
					<img
						src={logo}
						style={{ width: '300px', height: '150px' }}
						alt='logo'
					/>
				</div>
				<div>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<div key={item.id}>
									{index + 1} - {item.name}
									{' - '}
									<span
										onClick={() => this.handleDeleteUser(item)}
										style={{ cursor: 'pointer' }}
									>
										{' '}
										x
									</span>
								</div>
							);
						})}
					<button onClick={() => this.handleCreateUser()}>Add new</button>
				</div>
			</>
		);
	}
}

// export default withRouter(Home);
// lay  data tu store/redux chuyen qua props
const mapStateToProps = (state) => {
	return { dataRedux: state.users };
};

// (Dispatch) gui mot actions den Reducer de xu ly/execute Delete
const mapDispatchToProps = (dispatch) => {
	return {
		deleteUserRedux: (userDelete) =>
			dispatch({ type: 'DELETE_USER', payload: userDelete }),
		addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
	};
};

//  Color wrapper Home
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
